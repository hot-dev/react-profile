import React, { Component } from 'react';

class Contact extends Component {

   constructor(props) {
      super(props);
      this.state = {
         name: "",
         email: "",
         subject: "",
         message: ""
      };

      this.handleChangeName = this.handleChangeName.bind(this);
      this.handleChangeEmail = this.handleChangeEmail.bind(this);
      this.handleChangeSubject = this.handleChangeSubject.bind(this);
      this.handleChangeMessage = this.handleChangeMessage.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
   }

   handleChangeName (event) {
     this.setState({name: event.target.value});
   };

   handleChangeEmail (event) {
      this.setState({email: event.target.value});
   };

   handleChangeSubject (event) {
      this.setState({subject: event.target.value});
   };

   handleChangeMessage (event) {
      this.setState({message: event.target.value});
   };

   handleSubmit (event) {
      event.preventDefault();
      const templateId = "template_E4BHmB2G";

	   this.sendFeedback(templateId, {message_html: this.state.message, from_name: this.state.name, reply_to: this.props.data.email})
   }

   sendFeedback (templateId, variables) {
      window.emailjs.send(
        'gmail', templateId, variables
      ).then(res => {
         alert('Email successfully sent!');
         this.setState({});
      })
      .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
   }

   render() {
      if(this.props.data){
         var name = this.props.data.name;
         var street = this.props.data.address.street;
         var city = this.props.data.address.city;
         var state = this.props.data.address.state;
         var zip = this.props.data.address.zip;
         var phone= this.props.data.phone;
         var message = this.props.data.contactmessage;
      }

    return (
      <section id="contact">

         <div className="row section-head">

            <div className="two columns header-col">

               <h1><span>Get In Touch.</span></h1>

            </div>

            <div className="ten columns">

                  <p className="lead">{message}</p>

            </div>

         </div>

         <div className="row">
            <div className="eight columns">

               <form id="contactForm" name="contactForm">
					<fieldset>

                  <div>
						   <label htmlFor="contactName">Name <span className="required">*</span></label>
						   <input type="text" defaultValue="" size="35" id="contactName" name="contactName" onChange={this.handleChangeName}/>
                  </div>
{/* 
                  <div>
						   <label htmlFor="contactEmail">Email <span className="required">*</span></label>
						   <input type="text" defaultValue="" size="35" id="contactEmail" name="contactEmail" onChange={this.handleChangeEmail}/>
                  </div> */}

                  <div>
						   <label htmlFor="contactSubject">Subject</label>
						   <input type="text" defaultValue="" size="35" id="contactSubject" name="contactSubject" onChange={this.handleChangeSubject}/>
                  </div>

                  <div>
                     <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                     <textarea cols="50" rows="15" id="contactMessage" name="contactMessage" onChange={this.handleChangeMessage}>{message}</textarea>
                  </div>

                  <div>
                     <button onClick={this.handleSubmit} className="submit">Submit</button>
                     <span id="image-loader">
                        <img alt="" src="images/loader.gif" />
                     </span>
                  </div>
					</fieldset>
				   </form>

           <div id="message-warning"> Error boy</div>
				   <div id="message-success">
                  <i className="fa fa-check"></i>Your message was sent, thank you!<br />
				   </div>
           </div>


            <aside className="four columns footer-widgets">
               <div className="widget widget_contact">

					   <h4>Address and Phone</h4>
					   <p className="address">
						   {name}<br />
						   {street} <br />
						   {city}, {state} {zip}<br />
						   <span>{phone}</span>
					   </p>
				   </div>
            </aside>
      </div>
   </section>
    );
  }
}

export default Contact;
