import React from "react";
import Button from '@mui/material/Button';

const URL = 'https://wa.me';


const WhatsAppContact = ({ number, message, children, onClick, tierVariant }) => {
    //number = number?.replace(/[^\w\s]/gi, '').replace(/ /g, '');

    let url = `${URL}/${'56959581552'}`;

    if (message) {
        url += `?text=${encodeURI(message)}`;
    }
    
    return (
        <Button 
            variant={tierVariant}
            fullWidth
            onClick={(e) => {
                window.open(url);

                if (onClick) {
                    onClick(e);
                }
            }}
        >
            {children}
        </Button>
    );
};

export default WhatsAppContact;