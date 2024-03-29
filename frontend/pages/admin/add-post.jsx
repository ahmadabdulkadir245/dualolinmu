import { useState } from 'react';
import dynamic from "next/dynamic";
import Header from '../../components/Header';
import Footer from '../../components/Footer';
const QuillNoSSRWrapper = dynamic(import('react-quill'), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
})
// context
import { AuthContext } from "../../context/authContext";
import { useContext } from 'react';
const modules = {
  toolbar: [
    [{ header: '1' }, { header: '2' }, { header: '3' }, { font: [] }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' },
    ],
    ['link', 'image', 'video'],
    ['clean'],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
}

function AddPost() {
  const {currentUser} = useContext(AuthContext)
  const [value, setValue] = useState('')
  const [inputs, setInputs] = useState({
    title: '',
    category: ''
  })
  const [content, setContent] = useState('');
  const [isDraft, setIsDraft] = useState(true);
  const [isPublished, setIsPublished] = useState(false);

  const inputHandler = (e) => {
    setInputs(prev => ({...prev, [e.target.name]: e.target.value}))
  }
  const [success, setSuccess] = useState(false)
  const [image, setImage] = useState(null)
  const handleFileInputChange = (event) => {
    setImage(event.target.files[0]);
  };
  const isUpdate = false
  const addPostHandler = (e) => {
    e.preventDefault()
    const formData = new FormData();
    formData.append('image', image);

    fetch(process.env.NEXT_PUBLIC_POST_IMAGE_URL, {
      method: 'POST',
      body: formData
    })   
    .then(res => res.json())
    .then(fileResData => {
      let image
      return  image = fileResData.image || 'undefined';
    })
    .then(image => {
      const postContent = {
        title: inputs.title,
        category: inputs.category,
        image: image,
        description: content,
        isDraft: isDraft,
        isPublished: isPublished
      }
    fetch(process.env.NEXT_PUBLIC_ADD_POST_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(postContent)
  })
    .then(res => {
      return res.json();
    })
    .then(result => {
      setInputs({
        title: '',
        category: '',
      })
      setTimeout(() => {
        setSuccess(true)
      }, 1000);
      setTimeout(() => {
        setSuccess(false)
      }, 8000);
    })
    })
    .catch(err => console.log(err))
}
console.log(currentUser)
  return (
    <div>
      <Header/>
      {!currentUser ?
     (<p className="text-3xl gird place-content-center place-items-center text-center h-screen pt-52 uppercase">user not logged in </p>)
  :
  <>
      <h2 className='text-center font-semibold text-2xl  py-6 tracking-wide'>CREATE POST</h2>
      {success &&
          <p className="text-center text-xl text-green-400 mt-2 transition-all duration-300 ease-out">product add successfully </p>
      }
      <form className='px-[12px]'>
      <input
              type='text'
              className='bg-gray-200 lg:border-[1px] rounded-lg  outline-none px-4 py-[16px] w-full  m-auto flex mb-5 lg:my-5'
              placeholder='Post Title'
              required
              name="title"
              onChange={inputHandler}
            />
      <input
              type='text'
              className='bg-gray-200 lg:border-[1px] rounded-lg  outline-none px-4 py-[16px] w-full  m-auto flex mb-5 lg:my-5'
              placeholder='Post Category'
              required
              name="category"
              onChange={inputHandler}
            />
      <input
              type='file'
              className='bg-gray-200 lg:border-[1px] rounded-lg  outline-none px-4 py-[16px] w-full  m-auto flex my-5 lg:my-5'
              placeholder='Select image'
              required
              name='image'
              onChange={handleFileInputChange}
            />
      <div className="  font-semibold text-gray-500 h-[300px] overflow-y-scroll shadow-md border border-gray-400 rounded-md overflow-hidden">
      <QuillNoSSRWrapper modules={modules} onChange={setContent} theme="snow" />
      </div>
      {isUpdate ? (
        <button
          className='flex justify-center m-auto mt-5 lg:mt-5  bg-gray-500 w-56 rounded-full text-white  px-2 py-3 2xl:p-3 outline-none transition-all duration-300 ease-in-out hover:bg-[#ffcb05] 2xl:w-[300px] mb-20'
        //   onClick={updateDataHandler}
        >
          Update
        </button>
      ) : (
        <button type="submit"
          className='flex justify-center m-auto mt-5 lg:mt-5  bg-gray-800 w-56 rounded-full text-white  px-2 py-4 2xl:p-3 outline-none transition-all duration-300 ease-in-out hover:bg-yellow-500 2xl:w-[300px] mb-20'
          onClick={addPostHandler}
        >
          Add Post
        </button>
      )}
        </form>
      </>
        }
        <Footer/>
    </div>
  )
}

export default AddPost