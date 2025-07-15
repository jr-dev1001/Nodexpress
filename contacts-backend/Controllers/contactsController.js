const asyncHandler  = require('express-async-handler');
//@desc Get all contacts
//@route GET /api/contacts
//@access Public
const getContacts = asyncHandler( async(req, res) => {
    res.status(200).json({ message: 'get all contacts' });
});


//@desc Create a new contact
//@route POST /api/contacts 
//@access Public
const createContact = asyncHandler( async(req, res) => {
    console.log("request body is ",req.body);
    const {name, email, phone} = req.body;
    if(!name || !email || !phone) {
        res.status(400);
        throw new Error('Please add all fields');
    }
    res.status(200).json({ message: 'created contact' });
});

//@desc Get contact by ID
//@route GET /api/contacts/:id
//@access Public
const getContact = asyncHandler( async(req, res) => {
    res.status(200).json({ message: `get contact id ${req.params.id}` });
});


//@desc Update contact by ID
//@route PUT /api/contacts/:id
//@access Public
const updateContact = asyncHandler( async(req, res) => {
    res.status(200).json({ message: `updated contact for ${req.params.id}` });
});

//@desc Delete contact by ID
//@route DELETE /api/contacts/:id
//@access Public
const deleteContact = asyncHandler( async(req, res) => {
    res.status(200).json({ message: `deleted contact for ${req.params.id}` });
});

module.exports = {
    getContacts,
    createContact,
    getContact,
    updateContact,
    deleteContact
};