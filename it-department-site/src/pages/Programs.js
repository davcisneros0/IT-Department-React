export default function Programs() {
    // Curriculum, admission requirements, career prospects
    return (
        <div className="programs-page">
            <div id="programs-statement">
                <div id="programs-statement-header">
                    <h2>Programs</h2>
                </div>

                <div class="section-container">
                    <p>Broward College offers a comprehensive selection of Information Technology (IT) programs aimed at preparing 
                        students for successful careers in the dynamic tech sector. The college provides associate 
                        degrees, professional certificates, and specialized courses in fields like cybersecurity, 
                        network administration, software development, and data science.
                        <br></br><br></br>
                        With a focus on practical, hands-on training, Broward College features modern labs and strong connections 
                        with industry partners, ensuring 
                        that students gain valuable real-world experience. The IT programs cater to a variety of skill levels, from
                        those just starting out to professionals seeking to enhance their expertise. 
                        <br></br><br></br>
                        Offering flexible schedules, including online learning options, as well as opportunities for internships and 
                        certifications, Broward College is committed to producing highly qualified IT professionals ready to 
                        thrive in today’s technology-driven job market.
                    </p>
                </div>
                <hr></hr>
            </div>

            <div id="programs-list-list">

                <div className="programs-list-item">
                    <img src="https://images.unsplash.com/photo-1542744173-b3cd6377db95?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="A man looking at two computer monitors, one monitor that has code and one monitor that shows the actual website"></img>
                    <div className="programs-list-item-card">
                        <h3>Web Design</h3>
                        <p>The Web Design program teaches students how to create both functional and visually engaging websites. 
                            The curriculum covers key skills in coding languages like HTML, CSS, and JavaScript, along with 
                            design tools for prototyping and layout. Students also dive into principles of user 
                            experience (UX) and user interface (UI) design, blending technical expertise with 
                            creative solutions.</p>
                        <span class="programs-list-item-card-small">test</span>
                    </div>
                </div>

                <div className="programs-list-item">
                    <div className="programs-list-item-card">
                        <h3>Cybersecurity</h3>
                                <p>The Cybersecurity program prepares students to safeguard information and technology systems 
                                    against cyber threats and attacks. The program combines theoretical knowledge with
                                     practical experience, covering areas like network security, incident response, and 
                                     ethical hacking. Students also explore topics such as cryptography, malware analysis, and 
                                     security protocols to develop a strong foundation in protecting sensitive data. 
                                </p>
                    </div>
                    <img src="https://www.openaccessgovernment.org/wp-content/uploads/2021/07/dreamstime_xl_217658546-scaled.jpg"
                    alt="Someone with long hair looking at a computer screen with a lock screen"></img>
                </div>

                <div className="programs-list-item">
                <img src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="A router with a bunch of white and blue cables"></img>
                    <div className="programs-list-item-card">
                        <h3>Network Infrastructure</h3>
                        <p>The Network Infrastructure program is designed to provide students with a comprehensive 
                            understanding of the technologies and skills necessary to build, maintain, and secure modern networks. 
                            Through hands-on training in areas like routing, switching, cybersecurity, and cloud networking, students 
                            gain real-world experience in managing complex IT systems.</p>
                    </div>
                </div>

                <div className="programs-list-item">
                    <div className="programs-list-item-card">
                        <h3>Computer Literacy</h3>
                            <p>The Computer Literacy program offers students the opportunity to build a strong foundation in 
                                essential computer skills needed for today’s digital world. The curriculum includes practical 
                                training in word processing, spreadsheets, presentations, and internet navigation, along with 
                                an introduction to coding and digital communication.
                            </p>
                    </div>
                    <img src="https://images.unsplash.com/photo-1603201667493-4c2696de0b1f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="A female looking at her computer screen with a gallery of images"></img>
                </div>

                <div className="programs-list-item">
                    <img src="https://www.cdotrends.com/sites/default/files/why_it%E2%80%99s_time_to_treat_sql_like_programming_code_paragraph_3179.jpg"
                    alt="A man looking at two computer monitors, one monitor that has code and one monitor that shows the actual website"></img>
                    <div className="programs-list-item-card">
                        <h3>Database Management</h3>
                        <p>The Database Management program provides students with a deep understanding of relational 
                            databases, focusing on SQL (Structured Query Language) and Oracle database systems. Through hands-on coursework, 
                            students learn how to design, query, and manage databases, developing skills in data modeling, normalization, and 
                            performance optimization.</p>
                    </div>
                </div>

            </div>


        </div>
    )
}