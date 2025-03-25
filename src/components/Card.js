import React from 'react';
import {FcLike,FcLikePlaceholder} from "react-icons/fc";
import { toast } from 'react-toastify';

export const Card = (props) => {
    let course= props.course;
    let likedCourses=props.likedCourses;
    let setLikedCourses =props.setLikedCourses;


    // this is very difficult to think.
    function clickHandler(){
        if(likedCourses.includes(course.id)){
            //phle se like hue pada hai
            setLikedCourses ((prev) => prev.filter((cid)=> (cid!==course.id)  ));
            toast.warning("Liked Removed");
        }
        else{
            //phle se like nhi hai ye course 
            //insert krna h ye course liked course me
            if (likedCourses.length === 0 ){
                setLikedCourses([course.id]);
            }
            else{
                //non-empty phle se
                setLikedCourses((prev) => [...prev, course.id]);
            }
            toast.success("Liked Successfully");
        }
    }


  return (
    <div className="w-[300px] bg-sky-900 rounded-md overflow-hidden bg-opacity-80">
        <div className="relative">
            <img src={course.image.url}/>
       
            <div className="w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-12px] grid place-items-center ">
                <button onClick={clickHandler}>
                    {
                        likedCourses.includes(course.id) ?
                        (<FcLike fontSize="1.75rem"/>) :
                            (<FcLikePlaceholder fontSize="1.75rem"/>)
                         
                    }
                </button>
            </div>
        </div>
        <div className=" p-4">
            <p className="text-white font-semibold text-lg leading-6">{course.title}</p>
            <p className=" mt-2 text-white">
                    {
                        course.description.length >100 ?
                         (course.description.substr(0,100)) + "...":
                         (course.description)
                    }
            </p>
        </div>
    </div>
  )
}
