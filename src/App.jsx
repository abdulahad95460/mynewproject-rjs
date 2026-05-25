import React from 'react'
import Card from './components/Card'

const App = () => {

const jobOpenings = [
  {
    brandLogo: "https://cdn-icons-png.flaticon.com/128/6033/6033716.png",
    nameOfCompany: "Meta",
    datePosted: "3 days ago",
    post: "Frontend Engineer",
    tag1: "Full time",
    tag2: "Mid level",
    pay: '$65',
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://www.freepnglogos.com/uploads/apple-logo-png/apple-logo-png-dallas-shootings-don-add-are-speech-zones-used-4.png",
    nameOfCompany: "Apple",
    datePosted: "1 week ago",
    post: "iOS Developer",
    tag1: "Full time",
    tag2: "Senior level",
    pay: '$80',
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://www.freepnglogos.com/uploads/picture-logo-png/picture-amazon-logo-15.png",
    nameOfCompany: "Amazon",
    datePosted: "5 days ago",
    post: "Cloud Support Associate",
    tag1: "Full time",
    tag2: "Junior level",
    pay: '$38',
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://www.freepnglogos.com/uploads/netflix-logo-app-png-16.png",
    nameOfCompany: "Netflix",
    datePosted: "2 weeks ago",
    post: "UI/UX Designer",
    tag1: "Contract",
    tag2: "Senior level",
    pay:'$75',
    location: "Remote, India"
  },
  {
    brandLogo: "https://images.seeklogo.com/logo-png/26/1/google-2015-logo-png_seeklogo-268116.png",
    nameOfCompany: "Google",
    datePosted: "10 days ago",
    post: "Software Engineer III",
    tag1: "Full time",
    tag2: "Senior level",
    pay: '$90',
    location: "Gurgaon, India"
  },
  {
    brandLogo: "https://www.freepnglogos.com/uploads/windows-logo-png/windows-logo-microsoft-exchange-pour-tous-microsoft-exchange-made-22.png",
    nameOfCompany: "Microsoft",
    datePosted: "4 days ago",
    post: "Data Scientist",
    tag1: "Full time",
    tag2: "Mid level",
    pay: '$70',
    location: "Pune, India"
  },
  {
    brandLogo: "https://images.seeklogo.com/logo-png/10/2/nvidia-logo-png_seeklogo-101614.png",
    nameOfCompany: "NVIDIA",
    datePosted: "6 days ago",
    post: "ML Research Intern",
    tag1: "Part time",
    tag2: "Junior level",
    pay: '$45',
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://cdn-icons-png.flaticon.com/128/888/888835.png",
    nameOfCompany: "Adobe",
    datePosted: "2 days ago",
    post: "Product Manager",
    tag1: "Full time",
    tag2: "Senior level",
    pay: '$54',
    location: "Noida, India"
  },
  {
    brandLogo: "https://images.seeklogo.com/logo-png/27/2/salesforce-logo-png_seeklogo-273876.png",
    nameOfCompany: "Salesforce",
    datePosted: "3 weeks ago",
    post: "Backend Developer",
    tag1: "Full time",
    tag2: "Mid level",
    pay: '$68',
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://images.seeklogo.com/logo-png/33/2/uber-logo-png_seeklogo-338872.png",
    nameOfCompany: "Uber",
    datePosted: "1 day ago",
    post: "DevOps Engineer",
    tag1: "Full time",
    tag2: "Senior level",
    pay: '$72',
    location: "Chennai, India"
  }
];

console.log(jobOpenings);


  return (
    <div className='parent'>

 {jobOpenings.map(function(elem,idx){
 
return <div key={idx}> 
<Card company={elem.nameOfCompany} date={elem.datePosted} postt={elem.post} tag01={elem.tag1}   tag02={elem.tag2} pay={elem.pay} location={elem.location} brandLogo={elem.brandLogo} />
  </div>

 })}
          
    

       </div>
    
      
  )
}

export default App