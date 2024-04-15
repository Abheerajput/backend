const Member = require("../schema/Member");
const TrainerModel = require("../schema/Trainer");

const bcrypt = require('bcryptjs');


const home = async (req, res) => {
  try {
    res.status(200).send("Welcome to the home page by routing");
  } catch (error) {
    console.log(error);
    res.status(500).json("Internal server error");
  }
};

const deleteMember = async (req, res) => {
console.log(req.params, req.body, "testing")
  try {
    const {id } = req.body || req.params;

  //  const deletedUser = Member.remove({_id : id})
  const deletedUser = await Member.deleteOne({_id : id})
   console.log("Deleted User: ", deletedUser)
    // Member.deleteOne({_id : id})


   
    return res.status(200).json({ message: 'Member deleted successfully' });
  } catch (error) {
    console.error('Error deleting member:', error);
    return res.status(500).json({ message: 'Failed to delete member' });
  }
};



const addMember = async (req, res) => {
  try {
    const { firstname, lastname, email, DateofAddmission, Address, phone, Membership, feesPending } = req.body;

    // Check if the required fields are provided
    if (!firstname || !lastname || !email || !DateofAddmission || !Address || !phone || !Membership  || !feesPending ) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Check if the member with the given email already exists
    const memberExists = await Member.findOne({ email });

    if (memberExists) {
      return res.status(400).json({ message: "Member with this email already exists" });
    }

    const newMember = new Member({
      firstname,
      lastname,
      email,
      DateofAddmission,
      Address,
      phone,
      Membership,
      feesPending
    });

    // Save the new member to the database
    await newMember.save();

    // Send a success response
    res.status(201).json({ message: 'Member added successfully', member: newMember });
  } catch (error) {
    console.log(error)
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};


const getMember = async (req, res) => {
  try {
    // Assuming your Mongoose model is named "Member"
    const members = await Member.find({}, { _id: 1, 
      firstname: 1, 
      email: 1, 
      phone: 1 ,
      Membership:1 ,
      DateofAddmission:1,
      Address:1,
      feesPending:1,
       });
    // Use "Member" instead of "Member.find"

    res.status(200).json(members);
    // Send the "members" array as the response
  } catch (error) {
    console.error('Error fetching members:', error);
    // Log the error to the console

    res.status(500).json("Internal server error");
    // Send a 500 error response
  }
};





const addTrainer = async (req, res) => {
  try {
    const { name, DateOfJoining, Address, Phone, Skills } = req.body;

    // Check if the required fields are provided
    if (!name || !DateOfJoining || !Address || !Phone || !Skills) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Check if the trainer with the given name already exists
    const trainerExists = await TrainerModel.findOne({ name });

    if (trainerExists) {
      return res.status(400).json({ message: "Trainer with this name already exists" });
    }

    // Create a new trainer instance
    const newTrainer = new TrainerModel({
      name,
      DateOfJoining,
      Address,
      Phone,
      Skills,
    });

    // Save the new trainer to the database
    await newTrainer.save();

    // Send a success response
    res.status(201).json({ message: 'Trainer added successfully', Trainer: newTrainer });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const getAllTrainer = async (req, res) => {
  try {
    const trainers = await TrainerModel.find({}, { _id: 1, name: 1, Skills: 1, Phone: 1 });
    res.status(200).json(trainers);
  } catch (error) {
    console.error('Error fetching trainers:', error);
    res.status(500).json("Internal server error");
  }
};



module.exports = { home, addMember, getMember, addTrainer, getAllTrainer, deleteMember, };
