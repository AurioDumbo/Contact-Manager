//@ controller to get Contact
const getContact = (req, res) => {
    res.status(200).json({ message: `Contacto: ${req.params.id}` });
};

//@ controller to get all Contacts
const getContacts = (req, res) => {
    res.status(200).json({ message: "Contactos" });
};

//@ controller to post all Contacts
const postContact = (req, res) => {
    const { nome, email, telefone } = req.body;
    if (!nome || !email || !telefone) {
        res.status(400);
        throw new Error("Todos os campos devem ser preenchidos.");
    }
    res.status(201).json({ message: "Contacto criado", data: { nome, email, telefone } });
    console.log(req.body);
};

//@ controller to update a Contact
const putContact = (req, res) => {
    const { nome, email, telefone } = req.body;
    res.status(200).json({ message: `Contacto atualizado: ${req.params.id}`, data: { nome, email, telefone } });
};

//@ controller to delete a Contact
const deleteContact = (req, res) => {
    res.status(200).json({ message: `Contacto deletado: ${req.params.id}` });
};

module.exports = { getContact, getContacts, postContact, putContact, deleteContact };