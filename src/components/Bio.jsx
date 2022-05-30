import '..//styles/Bio.css'


function Bio () {
    return(
        <div className="np-bio container">
            
            <section>
                <div>
                <h3 className='bio-about'><big>About</big></h3>    
                <div className='text-wrapper'>
                    <p>
                        I am a machine learning engineer skilled in data analysis and manipulation using SQL and python.
                        My first role in machine learning entailed research, modelling and improvement of a demand forecast module.
                        The role expanded my grasp and reach in the subject matter.
                        Since, I have continuously improved my skills and knowledge through
                        continuous learning and taking on several other projects.
                    </p>
                </div>
                </div>
            </section>
            <section>
                <div className='np-experience'>
                    <h3>
                        <span> My Area of Expertise</span>
                    </h3>
                </div>
            </section>
            <section>
                <div className='np-outline'>
                    <h4>Machine Learning</h4>
                    <p className='exp'>I am intrigued by the power of machine learning and 
                        its utilization in our day to day lives to improve and better the 
                        ancient technological methods of explicily writing  codes.</p>
                    <h4>Data Science</h4>
                    <p>I am intentional about data driven 
                        solutions to infer trends and patterns and consequently make informed decisions.
                        I am exprienced in data cleaning, processing and exploration.</p>
                    <h4>Python, JavaScript, HTML,CSS, React and SQL</h4>
                    <p>My knowledge in the aformentioned languages and interaction is advanced. I have built 
                        several projects to show for the same.</p>   
                </div>
            </section>
        </div>
    )
}
export default Bio