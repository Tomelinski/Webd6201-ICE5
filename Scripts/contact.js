"use strict";
//contact class
((core)=>{


  class Contact {
    //getters and setters
    get FullName() {
      return this.m_fullName;
    }
    set FullName(value) {
      this.m_fullName = value;
    }
    get ContactNumber() {
      return this.m_contactNumber;
    }
    set ContactNumber(value) {
      this.m_contactNumber = value;
    }
    get EmailAddress() {
      return this.m_emailAddress;
    }
    set EmailAddress(value) {
      this.m_emailAddress = value;
    }
    
    /**
     * contact class
     * 
     * Creates an instance of Contact.
     * @param {string} [fullName=""]
     * @param {string} [contactNumber=""]
     * @param {string} [emailAddress=""]
     * @memberof Contact
     */
    constructor(fullName ="", contactNumber="", emailAddress="") {
      this.m_fullName = fullName;
      this.m_contactNumber = contactNumber;
      this.m_emailAddress = emailAddress;
    }
  
    /**
     *overrides the built in toString method
     *
     * @return {*} 
     * @memberof Contact
     */
    toString() {
      return `Full Name: ${this.m_fullName} 
  Contact Number: ${this.m_contactNumber}
  Email Address: ${this.m_emailAddress}`;
    }

    /**
     *this method takes a json object and assigns them to contact info
     *
     * @param {object} data
     * @memberof Contact
     */
    toJSON(){
        return{
            "FirstName":this.fullName,
            "ContactNumber":this.contactNumber,
            "Email":this.emailAddress,
        }
    }

    fromJSON(data){
      this.FullName = data.FullName;
      this.ContactNumber = data.ContactNumber;
      this.EmailAddress = data.Email;
    }

    /**
     *this method converts the contacts into a comma-seperate string
     *
     * @return {string} 
     * @memberof Contact
     */
    serialize(){
        if(this.FullName !== "" && this.contactNumber !== "" && this.emailAddress !== ""){
            return `${this.m_fullName},${this.m_contactNumber},${this.m_emailAddress}`;
        } else {
            console.error("contact is empty");
            return null;
        }
    }

    /**
     * this method takes a comma-seperate data string and assigns values to the contact class
     *
     * @param {string} data
     * @return {void}
     */
    deserialize(data){
        let propertyArray = data.split(",");
        this.FullName = propertyArray[0];
        this.ContactNumber = propertyArray[1];
        this.EmailAddress = propertyArray[2];
    }
  }

  core.Contact = Contact;
})(core || (core = {}));