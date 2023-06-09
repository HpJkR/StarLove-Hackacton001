import React, { useState } from 'react';


const Favorite = ({peoples}) => {
  const [likedProfiles, setLikedProfiles] = useState([]);

  const handleProfileLike = (profile) => {
    setLikedProfiles([...likedProfiles, profile]);
  };

  return (
    <>
      {peoples.map((people, index) => (
        <div key={index}>
          <h2>{people.name}</h2>
          <button onClick={() => handleProfileLike(people)}>Like</button>
          console.log("return favorite")
        </div>
      ))}
    </>
  );
};

export default Favorite;