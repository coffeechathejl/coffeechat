import './mentorprofile.css';

const MentorProfile = () => {
    const imageURL = 'https://media.licdn.com/dms/image/D4D03AQExcCXVmir3pQ/profile-displayphoto-shrink_800_800/0/1683069783248?e=1712793600&v=beta&t=rWtzjoITgotP5mACj5H8KrYkFSAjTo_rO-an8C1YwP0'
    const jobURL = 'https://media.licdn.com/dms/image/C560BAQGI_GYoDekJsQ/company-logo_100_100/0/1680024442682/cohere_ai_logo?e=1715212800&v=beta&t=UvFL6pXUkoj90hipMx_HMhdtbSKEKOsWo5-Y_OZoNrU'
    
    return(
        <div className="container">
=            <div className="column1 column">
                <div className="personal-profile">
                    <div className='left-panel'>
                    <div className="profile-picture">
                        <img src={imageURL} alt="LinkedIn Profile" />
                    </div>
                    <div className="personal-profile-text">
                        <h1>Lauren Lidhar</h1>
                        <h3>Bio: CS @ Queen's</h3>
                        <br />
                        <h2>My Contact Info</h2>
                        <h3>Email</h3>
                        <h3>Phone #</h3>
                        <h3>LinkedIn URL</h3>
                        <h3>Github</h3>
                        <h3>Resume</h3>
                        <br/>
                        <h2>Preferences</h2>
                        <h3>Tech Industry</h3>
                    </div>
                    </div>
                </div>
            </div>
            <div className="column2 column">
                <div className='mentor-info'>
                    <div mentor-header>
                    <div className="centered-div" style={{ textAlign: 'center', marginBottom: '1em', borderBottom: '1px solid black' }}>
                        <h1>Strong Match</h1>
                    </div>
                        <h1 style={{marginBottom: '0.7em'}}>Meet your Mocha Mentor!</h1>
                    </div>
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
                        <h1 style={{ marginTop: '0.5em'}}>Experience</h1>
                        <div className='experience-info'>
                            <div className='job-picture'>
                                <img src={jobURL} alt="Job image"></img>
                            </div>
                            <div className='job-info'>
                                <h4>Orientation Chair</h4>
                                <h4>Queen's Computing Orientation</h4>
                                <h4>May 2019 - Present</h4>
                            </div>
                        </div>
                        <h1>Education</h1>
                        <div className='experience-info'>
                            <div className='job-picture'>
                                <img src={jobURL} alt="Job image"></img>
                            </div>
                            <div className='job-info'>
                                <h4>Orientation Chair</h4>
                                <h4>Queen's Computing Orientation</h4>
                                <h4>May 2019 - Present</h4>
                            </div>
                        </div>




                    </div>
                </div>



            </div>
        </div>
    );
}

export default MentorProfile;