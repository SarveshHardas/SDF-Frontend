import { Mail } from "lucide-react";
import { FaLinkedin, FaTwitter } from "react-icons/fa";

export default function TeamPage() {
  const team = [
    {
      name: "Mr. Ashish Deshpande",
      role: "President",
      img: "/tm/tm1.png",
      url:"https://www.linkedin.com/in/ashish-deshpande-10530a51/"
    },
    {
      name: "Mr. Rohit Tokhi",
      role: "Vice-President",
      img: "/tm/tm2.png",
      url:"#"
    },
    {
      name: "Mr. Swapnel Chawre",
      role: "Secretary",
      img: "/tm/tm3.png",
      url:"#"
    },
    {
      name: "Mr. Javed Khan",
      role: "Vice-Secretary",
      img: "/tm/tm4.png",
      url:"#"
    },
{
      name: "Mrs. Monali Deshpande",
      role: "Head - CSR Projects",
      img: "/tm/tm5.png",
      url:"#"
    },
 {
      name: "Mr. Dinesh Dhawane",
      role: "Head - Library Management",
      img: "/tm/tm6.png",
      url:"#"
    },
    {
      name: "Mrs. Dipali Sakharkar",
      role: "Head - Art and Craft",
      img: "/tm/tm7.png",
      url:"#"
    },
    {
      name: "Ms. Shraddha Deshpande",
      role: "Head - Medical Project",
      img: "/tm/tm8.png",
      url:"#"
    },
    {
      name: "Dr. Bhupesh Saroder",
      role: "Administrative Head",
      img: "/tm/tm9.png",
      url:"https://www.linkedin.com/in/13-bhupesh-sarode/"
    },
    {
      name: "Mr. Utsav Sinha",
      role: "Faculty - Maths",
      img: "/tm/tm10.png",
      url:"#"
    },
    {
      name: "Dr. Pranita Lanjewar",
      role: "Head - Women's Health and Sanitation Program",
      img: "/tm/tm11.png",
      url:"#"
    },
    {
      name: "Mr. Tushar Meshram",
      role: "Head - Human Resource",
      img: "/tm/tm12.png",
      url:"#"
    },
    {
      name: "Mr. Bhushan Maidule",
      role: "Treasurer",
      img: "/tm/tm13.png",
      url:"#"
    },
    {
      name: "Ms. Ankita Rathor",
      role: "Head - Government Projects",
      img: "/tm/tm14.png",
      url:"#"
    },
    {
      name: "Mr. Nikhilesh Ramteke",
      role: "Insurance and Policies",
      img: "/tm/tm15.png",
      url:"#"
    },
    {
      name: "Mr. Swapnesh Ramteke",
      role: "French Language Coordinator",
      img: "/tm/tm16.png",
      url:"#"
    }
  ];

  return (
    <div className="pt-20 bg-white min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-navy mb-4">Meet Our Team</h1>
          <div className="w-24 h-1 bg-teal mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The dedicated individuals driving the mission of Saving Dreamz Foundation forward with unwavering commitment.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <div key={i} className="group text-center">
              <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden shadow-lg border-4 border-gray group-hover:border-teal transition-colors duration-300">
                <img 
                  src={member.img} 
                  alt={member.name} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl font-bold font-heading text-navy mb-1">{member.name}</h3>
              <p className="text-orange font-semibold mb-3">{member.role}</p>
              
              <div className="flex justify-center space-x-3 text-gray-400">
                <a href={member.url} target="_blank" className="hover:text-teal transition-colors"><FaLinkedin size={20} /></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
