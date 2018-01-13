import React, {Component} from 'react';
import config from '../../config';
import './Resume.css';

//components
import ApplicableProjects from './ApplicableProjects';
import Education from './Education';
import Interest from './Interest';
import ProjectedCoursework from './ProjectedCoursework';
import Skills from './Skills'
import workExperience from './WorkExperience'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showCourseWork: this.displayCourseWork(config.resume.projectedCourseWork),
            applicableProjects: this.displayApplicableProjects(config.resume.applicableProjects),
            workExperience: this.displayPlacesOfWork(config.resume.workExperience),
            involvementVolunteering: this.displayInvolvementVolunteering(config.resume.interest),
            displayInterest: this.displayInterest(config.resume.interest)
        }
    }

    displayCourseWork(arr) {
        let courseWorkDisplay = [];
        for (let i = 0; i < arr.length; i++) {
            courseWorkDisplay.push(
                <li>{arr[i]}</li>
            );
        }
        return courseWorkDisplay;
    }

    displayApplicableProjects(arr) {
        let projects = [];
        for (let i = 0; i < arr.length; i++) {
            projects.push(
                <li>{arr[i]}</li>
            );
        }
        return projects;
    }

    displayPlacesOfWork(arr) {
        let places = [];
        let dutyList = [];
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr[i].duties.length; j++) {
                dutyList.push(
                    <li>{arr[i].duties[j]}</li>
                )
            }
            places.push(
                <div>
                    <div>{arr[i].titleAndBasicInfo}</div>
                    <ul>{dutyList}</ul>
                </div>
            )
        }
        return places;
    }

    displayInvolvementVolunteering(arr) {
        let involvment = [];
        for (let i = 0; i < arr.length; i++) {
            involvment.push(<li>{arr[i]}</li>);
        }
        return involvment;
    } 

    displayInterest(arr) {
        let interest = [];
        for (let i = 0; i < arr.length; i++) {
            interest.push(<li>{arr[i]}</li>);
        }
        return interest;
    } 
    render() {
        return (
            <div >
                <h3>Education</h3>
                <div>{config.resume.school}</div>
                <div>{config.resume.degree}</div>
                <h3>{config.resume.projectedCourseWorkTitle}</h3>
                <ul>{this.state.showCourseWork}</ul>
                <h3>Applicable Projects</h3>
                <ul>{this.state.applicableProjects}</ul>
                <h3>Work Experience</h3>
                {this.state.workExperience}
                <h3>Student Involvement</h3>
                <ul>{this.state.involvementVolunteering}</ul>
                <h3>Interest</h3>
                <ul>{this.state.displayInterest}</ul>
            </div>
        );
    }
}

export default Home;