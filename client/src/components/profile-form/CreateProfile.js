import React, { useState, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile } from '../../actions/profile';

const initialState = {
  company: '',
  website: '',
  location: '',
  bio: '',
  status: '',
  skills: '',
  youtube: '',
  facebook: '',
  twitter: '',
  instagram: '',
  linkedin: ''
};

const CreateProfile = ({ 
  createProfile, 
  history
 }) => {
  const [formData, setFormData] = useState(initialState);

  const [displaySocial, toggleSocial] = useState(false);

  const {
    company,
    website,
    location,
    bio,
    status,
    skills,
    youtube,
    facebook,
    twitter,
    instagram,
    linkedin
  } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    createProfile(formData, history );
  }

  return (
    <Fragment>
      <h1 className="large text-primary">
        Create Your Profile
      </h1>
      <p className="lead">
        <i className="fas fa-user"></i> Let's get some information to make your
        profile stand out
      </p>
      <small>* = required field</small>
      <form className="form" onSubmit={e => onSubmit(e)} >
        <div className="form-group">
          <select name="status" value={status} onChange={e => onChange(e)} >
            <option value="0">* Select Professional Status</option>
            <option value="Advisor">Advisor</option>
            <option value="Business Analyst">Business Analyst</option>
            <option value="Coordinator">Coordinator</option>
            <option value="Data Scientist">Analyst</option>
            <option value="Graphic Designer">Graphic Designer</option>
            <option value="Hardware Engineer">Hardware Engineer</option>
            <option value="Instructor">Instructor</option>
            <option value="Intern">Intern</option>
            <option value="IT Specialist">IT Specialist</option>
            <option value="Manager">Manager</option>
            <option value="Network Engineer">Network Engineer</option>
            <option value="Researcher">Researcher</option>
            <option value="Software Engineer">Software Engineer</option>
            <option value="Student">Student</option>
            <option value="Systems Administrator">Systems Administrator</option>
            <option value="Technician">Techinician</option>
            <option value="UI/UX Design">UI/UX Design</option>
            <option value="Web Developer">Web Developer</option>
            <option value="Other">Other</option>
          </select>
          <small className="form-text"
            >Give us an idea of where you are at in your career</small
          >
        </div>
        <div className="form-group">
          <input type="text" placeholder="Company" name="company" value={company} onChange={e => onChange(e)} />
          <small className="form-text"
            >Could be your own company or one you work for</small
          >
        </div>
        <div className="form-group">
          <input type="text" placeholder="Website" name="website" value={website} onChange={e => onChange(e)} />
          <small className="form-text"
            >Could be your own or a company website</small
          >
        </div>
        <div className="form-group">
          <input type="text" placeholder="Location" name="location" value={location} onChange={e => onChange(e)} />
          <small className="form-text"
            >City & state suggested (eg. Boston, MA)</small
          >
        </div>
        <div className="form-group">
          <input type="text" placeholder="* Skills" name="skills" value={skills} onChange={e => onChange(e)} />
          <small className="form-text"
            >Please use comma separated values (eg.
            HTML,CSS,JavaScript,PHP)</small
          >
        </div>
        <div className="form-group">
          <textarea placeholder="A short bio of yourself" name="bio"
          value={bio} onChange={e => onChange(e)}></textarea>
          <small className="form-text">Tell us a little about yourself</small>
        </div>

        <div className="my-2">
          <button type="button" className="btn btn-light" 
          onClick={()=> toggleSocial(!displaySocial)} >
            Add Social Network Links
          </button>
          <span>Optional</span>
        </div>

        {displaySocial &&
        <Fragment>
          <div className="form-group social-input">
            <i className="fab fa-twitter fa-2x"></i>
            <input type="text" placeholder="Twitter URL" name="twitter"
            value={twitter} onChange={e => onChange(e)} />
          </div>

          <div className="form-group social-input">
            <i className="fab fa-facebook fa-2x"></i>
            <input type="text" placeholder="Facebook URL" name="facebook"
            value={facebook} onChange={e => onChange(e)} />
          </div>

          <div className="form-group social-input">
            <i className="fab fa-youtube fa-2x"></i>
            <input type="text" placeholder="YouTube URL" name="youtube"
            value={youtube} onChange={e => onChange(e)} />
          </div>

          <div className="form-group social-input">
            <i className="fab fa-linkedin fa-2x"></i>
            <input type="text" placeholder="Linkedin URL" name="linkedin"
            value={linkedin} onChange={e => onChange(e)} />
          </div>

          <div className="form-group social-input">
            <i className="fab fa-instagram fa-2x"></i>
            <input type="text" placeholder="Instagram URL" name="instagram"
            value={instagram} onChange={e => onChange(e)} />
          </div>
        </Fragment>
        }

        <input type="submit" className="btn btn-primary my-1" value="Submit" />
        <Link className="btn btn-light my-1" to="/dashboard">Go Back</Link>
      </form>
    </Fragment>
  );
}

CreateProfile.propTypes = {
  createProfile: PropTypes.func.isRequired
};

export default connect(null, { createProfile })(withRouter(CreateProfile));