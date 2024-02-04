import './mentorprofile.css';

const MentorProfile = () => {
    const imageURL = 'https://media.licdn.com/dms/image/D4D03AQExcCXVmir3pQ/profile-displayphoto-shrink_800_800/0/1683069783248?e=1712793600&v=beta&t=rWtzjoITgotP5mACj5H8KrYkFSAjTo_rO-an8C1YwP0'
    const jobURL = 'https://media.licdn.com/dms/image/C560BAQGI_GYoDekJsQ/company-logo_100_100/0/1680024442682/cohere_ai_logo?e=1715212800&v=beta&t=UvFL6pXUkoj90hipMx_HMhdtbSKEKOsWo5-Y_OZoNrU'
    
    return(
        <div className="container">
            <div className="column1 column">
                <div className="personal-profile">
                    <div className="profile-picture">
                        <img src={imageURL} alt="LinkedIn Profile" />
                    </div>
                    <div className="personal-profile-text">
                        <h1>Lauren Lidhar</h1>
                        <h3>Bio: CS & Queen's</h3>
                        <br />
                        <h2>My Contact Info</h2>
                        <h4>Email</h4>
                        <h4>Phone #</h4>
                        <h4>LinkedIn URL</h4>
                        <h4>Github</h4>
                        <h4>Resume</h4>
                        <br/>
                        <h2>Preferences</h2>
                    </div>
                </div>
            </div>

            <div className="column2 column">
                <div className='mentor-info'>
                    <h1 style={{marginBottom: '0.7em'}}>Meet your Mocha Mentor!</h1>
                    <div className='mentor-content'>
                        <div className='mentor-content-image'>
                            <img src={imageURL} alt="LinkedIn Profile" />
                        </div>
                        <div className='mentor-content-text'>
                            <h1>Jasmine van Leeuwen</h1>
                            <h3 style={{ fontWeight: 'normal' }}>(she/her)</h3>
                            <br />
                            <h3 style={{ fontWeight: 'normal' }}>+1 647 619 0260</h3>
                            <h3 style={{ fontWeight: 'normal' }}>jasvl2002@gmail.com</h3>
                        </div>
                    </div>
                </div>
                <div className='mentor-experience'>
                    <div className='mentor-experience-content'>
                        <h1>Experience</h1>
                        <div className='experience-info'>
                            <div className='job-picture'>
                                <img src={jobURL} alt="Job image"></img>
                            </div>
                            <div className='job-info'>
                                <h5>Software Developer</h5>
                                <h5>IBM</h5>
                                <h5>May 2019 - Present</h5>
                            </div>

                        </div>



                    </div>
                </div>



            </div>
        </div>
    );
}

export default MentorProfile;