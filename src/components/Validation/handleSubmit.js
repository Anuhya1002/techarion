import validator from 'validator';


const handleSubmit = async (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const message = event.target.message.value;
    const name = event.target.name.value;

    if (!validator.isEmail(email)) {
        // console.log("Valid Email")
    }
  
    if (!validator.isLength(message, { min: 10, max: 100 })) {
        // console.log("Valid Message")
    }
    if (!validator.isLength(name, { min: 2, max: 20 })) {
        // console.log("Valid Name")
        
    }

    const contact = {
        email,
        message,
        name
    };
 
    try {
        const response = await fetch('https://admin.srkprojects.com/web/api/client/v1/contact-us/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(contact)
        });

        if (!response.ok) {
            console.log("Valid Inputs")
        } else {
            return response
        }
    } catch (error) {
        
    }
};

export default handleSubmit