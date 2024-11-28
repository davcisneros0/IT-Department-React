export default function Contact() {
    // Contact information, including address, phone number, and email
    // Contact form 
    return (
        <div className="contact-page">
            <div id="contact-statement">

                <div id="contact-statement-header">
                    <h2>Contact</h2>
                </div>

                <div class="section-container">
                    <p>Our goal is to prepare and provide professional, courteous, accurate, and timely communication 
                        services at a superior level. We embrace a shared community of respect to our internal and 
                        external clients.</p>
                </div>
            </div>

            <div className="contact-body">
                <div class="contact-info">
                    <div>
                        <span><i class="fa fa-solid fa-phone contact-icons"></i></span>
                        <span className="contact-text">954-201-6723</span>
                    </div>

                    <div>
                        <span><i class="fa fa-solid fa-envelope contact-icons"></i></span>
                        <span className="contact-text">computer-science@broward.edu</span>
                    </div>

                    <div>
                        <span><i class="fa fa-solid fa-map-pin contact-icons"></i></span>
                        <span className="contact-text">Central Campus, Building 13, 3501 Davie Road, Davie, FL 33314</span>
                    </div>
                </div>

            <div className="contact-form">
                <form>
                    <div>
                        <input type="text" className="form-control" placeholder="First Name" required></input>
                        <input type="text" className="form-control" placeholder="Last Name"></input>
                    </div>
                    <div>
                        <input type="email" className="form-control" placeholder="Email" required></input>
                        <input type="text" className="form-control" placeholder="Phone"></input>
                    </div>
                    <textarea rows="5" placeholder="Message" className="form-control" required></textarea>
                    <input type="submit" className="send-Btn" value="Send"></input>
                </form>
            </div>

            </div>
        </div>
    )
}