'use client'

import {useState, useEffect} from 'react';
import Profile from '@components/Profile';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';



const MyProfile = () => {

    const { data: session } = useSession()
    const [myPosts, setMyPosts] = useState([]);
    const router = useRouter()

    
    const handleEdit = (post) =>{
       router.push(`/update-prompt?id=${post._id}`)
    }

    const handleDelete = async (post) => {
      const hasConfirmed = confirm("Are you sure you want to delete this prompt?");

      if(hasConfirmed){
        try {
          await fetch(`/api/prompt/${post._id.toString()}`,{
            method: 'DELETE'
          })
          const filteredPosts = myPosts.filter(item => item._id !== post.id )
          setMyPosts(filteredPosts)

        } catch (error) {
          console.log(error)
        }
      }
    }

      useEffect(() => {

        const fetchPosts = async () => {
            //obtener la publicacion de usuario especifico de mongodb
            const response = await fetch(`/api/users/${session?.user?.id}/posts`);
            const data = await response.json();
        
           setMyPosts(data);
            
          };

          if(session?.user.id) fetchPosts(); 
       
        },[]);


  return (
    <Profile
        name= 'My'
        desc = 'welcome to your personalized my Profile page'
        data = {myPosts}
        handleEdit = {handleEdit}
        handleDelete = {handleDelete}
    />
  )
}

export default MyProfile