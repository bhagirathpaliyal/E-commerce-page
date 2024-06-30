import About from './../../assets/About.jpg'

function H_section3() {
  return (
    <div id='section3' className="bg-[#F1F1F1] flex flex-col items-center gap-[50px] text-black p-[50px] ">
      <div className="text-[30px] md:text-[40px] ">About Us</div>
      <div className='w-[100%] flex justify-around gap-[20px]  flex-wrap'>
         <div className='min-h-[300px] max-w-[500px] rounded-[10px] overflow-hidden'>
        <img src={About} alt="image" />
      </div>

       <div className="max-w-[400px] text-center text-[14px] md:text-[18px]">
       <div className='pb-[30px]'> Founded in 2024, Crowd Zero was created to elevate the shopping
        experience. Here, your comfort and convenience come first. Find stylish
        essentials from a wide range of brands and enjoy hassle-free checkout
        and delivery. Zero in on what you want, minus the crowds and long lines.
        Sit back, relax, and shop to your heart's content.</div>

        <div className=''> Founded in 2024, Crowd Zero was created to elevate the shopping
        experience. Here, your comfort and convenience come first. Find stylish
        essentials from a wide range of brands and enjoy hassle-free checkout
        and delivery. Zero in on what you want, minus the crowds and long lines.
        Sit back, relax, and shop to your heart's content.</div>
      </div>
      </div>
     
     
    </div>
  );
}

export default H_section3;
