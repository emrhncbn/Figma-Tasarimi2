import React from 'react';

const App = () => {
  return (
    <div className="flex h-screen bg-white">
      <div className="flex flex-col justify-center items-center w-1/2 bg-white">
        <div className="w-full max-w-md p-6">
          <h1 className="flex items-center text-[100px] font-bold mb-6 text-gray-700 text-center">LOGIN</h1>
          <div className="flex flex-col items-center">
            <div className="w-full mb-4">
              <input
                type="text"
                placeholder="Username"
                name="username"
                className="border-2 p-2 rounded-lg w-[500px] h-[60px] mb-4"
              />
            </div>
            <div className="w-full mb-4">
              <input
                type="password"
                placeholder="Password"
                name="password"
                className="border-2 p-2 rounded-lg w-[500px] h-[60px] mb-4"
              />
            </div>
            <button className="bg-black text-white p-2 rounded-lg w-[200px] h-[50px] mb-4 self-start">LOGIN</button>
            <div className="relative w-full mb-4">
              <hr className="border-t-1 border-t-black mt-4 w-[500px] self-start"/>
              <span className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-2 ml-[50px]">OR</span>
            </div>
            <footer className="flex justify-center mb-4 space-x-4">
              <img
                src="https://s3-alpha-sig.figma.com/img/6b7b/692e/fef29f2f7d4a7f5acaf9a7bdf8a49655?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PH2NPgCjHIzxiBQwVGbPHD3DW69R4gl-hw2o664xkl~Wb722woiuca1gCgMH3wiUBJIcxrDwe1cPSxWitc5oJ70c~sS3UuYBpnIUYtezfY-ALEOchQCSfwXtgdThBqIW0q1fgzEURsvvwTiDa82pNoJdnsdGJovh5t4VMbSgcg4DNKewf4aIjZbJbrF~G5NQOQ3576Z4gddVPJlTwHBJBoo3DI19Qn7-awzKns5A403XUgfpwyuCYbaeaFnscxa3Ok5f7mpU73US7LkrPkPOk2aFMDNfTF8teqQxMyO7P9WO9UH9z7rGab7g0eBm~jVTX6wuqPwYhkFrtuP95tZH9w__"
                alt="Google Logo"
                className="w-5 h-5 ml-[100px] mt-4"
              />
              <img
                src="https://s3-alpha-sig.figma.com/img/3112/1d06/a0a3885a6e9ee2ac58a19d4784de4923?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OebrnKy9b8POX8UXx9htVnF583djUQnkBnSsHJx4cRqH6PLXJ8yMB8S7BiT7Z1fKZmWJvzdAplHEcQW1SXzOBDJ9rR5pOVFNtImKEhV3vj17LUgotmZZSF~5r-h~41tIlgJx~2IMT4XTviZVQujLtb7zscwBYD8tqjX9-L3oF3Z5E4r3X6aftICp9-eY41-67XnUdDTUYt-z7xn7gKmjNQ7H~1Z4vRyXOTUtBshEbmkGuMBmia6uTaoDz2ACCEGcE9XOq6ggbYF~UO-DbK3SZx-vpXZ1Nhuo7~Wq9i0PRxwcXGHkNJUOzUDCiMb-TnT4-gGqaiJxmMNgz~tn8tjMWg__"
                alt="Facebook Logo"
                className="w-5 h-5 mt-4"
              />
            </footer>
            <p className="text-center text-[20px] text-gray-500 font-bold ml-[100px]">
              Not yet registered? Click here to
              <a href="#" className="text-blue-500"> sign up</a>
            </p>
          </div>
        </div>
      </div>
      <div className="w-1/2">
        <img
          src="https://s3-alpha-sig.figma.com/img/37fd/b888/8df0935a0c0ef94529d12baea4357814?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KHmOcOW3PDB-J~5fcL8CQhX~qari8tIUBqbX1QC~vSRsGPrE7Yawzzc8kRrxpLwaoPhLt7l9J7g4F0Yyz8JPV3FQKu04bXfxra9UIz-EOgQj8Adc1vD1OgOwZIgSuyJ2nv43HSYKAKdB4~yWZd6CAJH1qb6QcandQzmOyPG~0mLjoYAPD~LgwvMsWbYQ-w0W-dUmk7RXT3eJJpwKzRbH3lW6OuLZWcM1jDzzttTyDCp~WJoWRTdyBCWKu3AnD8GeYrOAfbuEJGpBqrqPOCF461GncjC4~TIo8oA4L2QizwdVSj9IclU0OHSfcmJe1JeQvLpzbWjNk-qaiozPFJGB5Q__"
          alt="Parrot Image"
          className="w-[800px] h-[931px] ml-7 rounded-tl-[200px] rounded-bl-[200px]"
        />
      </div>
    </div>
  );
}

export default App;
