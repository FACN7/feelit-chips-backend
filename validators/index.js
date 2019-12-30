exports.userSignupValidator = (req, res, next) => {
    req.check("firstName").notEmpty().matches(/^[A-Z]/).withMessage("first name is required (first letter capital)!");
    req.check("surname").notEmpty().matches(/^[A-Z]/).withMessage("last name is required (first letter capital)!");
    req.check("email")
        .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
        .withMessage("You must enter a valid EMAIL!");
    req.check("password", "password is required!").notEmpty();
    checkForErrors(req, res, next);
};

exports.userLogInValidator = (req, res, next) => {
    req.check("email")
        .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
        .withMessage("You must enter a valid EMAIL!");
    req.check("password").notEmpty().withMessage("password is required!");
    checkForErrors(req, res, next);
};

exports.userInviteValidator = (req, res, next) => {
    req.check("email")
        .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
        .withMessage("You must enter a valid EMAIL!");
    req.check("user").notEmpty().withMessage("user is required!");
    checkForErrors(req, res, next);
};

const checkForErrors = (req, res, next) => {
    const errors = req.validationErrors();
    if (errors) {
        const firstError = errors.map(e => e.msg)[0];
        return res.status(400).json({ error: errors });
    }
    next();
};
