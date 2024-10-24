import React from 'react';

const Header = () => {


  return (
    <div>
        <div class="absolute text-white bg-transparent rounded-md h-[45px] top-[10px] left-[10px] z-[9999] overlay transition-colors duration-200 ease-in cursor-pointer font-serif"
          onMouseOver={(e) => e.currentTarget.style.color = '#9479f4'}
          onMouseOut={(e) => e.currentTarget.style.color = 'white'}
        >
          <h2><b><i>Hel1O's resume</i></b></h2>
        </div>
          <div className="absolute text-white bg-transparent rounded-md h-[45px] top-[10px] right-[10px] flex items-center z-[9999] cursor-pointer transition-colors duration-200 ease-in"
            onMouseOver={(e) => e.currentTarget.style.color = '#9479f4'}
            onMouseOut={(e) => e.currentTarget.style.color = 'white'}
          >
            {/* <img src="./src/assets/account.svg" alt="Logo" style={{ width: '50px', height: '35px' }} /> */}
            <b><h3>xoxo</h3></b>
          </div>

    </div>
  );
};

export default Header;
