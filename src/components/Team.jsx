const TeamMember = ({ member }) => {
    return (
      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md text-center">
        <img
          src={member.image}
          alt={member.name}
          className="w-24 h-24 sm:w-32 sm:h-32 mx-auto rounded-full object-cover"
        />
        <h2 className="text-lg sm:text-xl font-bold mt-4">{member.name}</h2>
        <p className="text-sm sm:text-gray-600">{member.role}</p>
        <p className="mt-2 text-xs sm:text-sm text-gray-700">{member.bio}</p>
      </div>
    );
  };
  
  const Team = ({ teamMembers }) => {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-20">
        <h1 className="text-2xl sm:text-3xl font-bold text-[#1B7646] text-center pb-4 sm:pb-6">
          Our Team
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 py-4 sm:py-6">
          {teamMembers.map((member) => (
            <TeamMember key={member.id} member={member} />
          ))}
        </div>
      </div>
    );
  };
  
  export default Team;