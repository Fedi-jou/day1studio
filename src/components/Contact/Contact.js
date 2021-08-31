import "./Contact.css";
import Contact1 from "../../Contactinfo";
const Contact = () => {
  return (
    <div>
      <div className="body" id={"contact"}>
        <div className="container">
          <div className="formbox">
            <form>
              <h2>Contact US</h2>
              <div className="inputbox">
                <input type="text" name="" required="required" />
                <span>Full Name</span>
              </div>
              <div className="inputbox">
                <input type="email" name="" required="required" />
                <span>E-mail address</span>
              </div>
              <div className="inputbox">
                <textarea required="required" />
                <span>Your message...</span>
              </div>
              <div className="inputbox">
                <input type="submit" value="send" required="required" />
              </div>
            </form>
          </div>
          <div id="fade">
            <Contact1 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
