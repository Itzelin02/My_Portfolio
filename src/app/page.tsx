import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-white">

      <section className="flex items-center justify-center py-20 bg-black">
        <div className="flex max-w-5xl rounded-2xl overflow-hidden">
          <div className="w-1/2">
            <img
              src="/my photo.jpg"
              alt="Imagen principal"
              className="h-[550px] w-auto rounded-xl"
            />
          </div>

          <div className="w-1/2 p-10 flex flex-col justify-center">
            <h1 className="text-6xl font-bold mb-4 text-white">My Portfolio</h1>
            <p className="text-gray-300 text-lg">
              Welcome to my academic portfolio. Here, I share the projects, lessons, 
              and experiences that reflect my growth as a student. Each work represents 
              my commitment to learning, creating, and contributing ideas with purpose.
            </p>
            <p className="text-gray-200 text-xl font-semibold mt-6">Let’s explore now</p>
          </div>
        </div>
      </section>

      <section className="w-full bg-black text-white py-16 px-10">
        <div className="flex justify-center gap-6 mb-12">
          <img
            src="/ventas 2.jpg"
            alt="Foto 1"
            className="w-1/4 rounded-xl object-cover"
          />
          <img
            src="/image (3).png"
            alt="Foto 2"
            className="w-1/4 rounded-xl object-cover"
          />
          <img
            src="/ventas 3.jpg"
            alt="Foto 3"
            className="w-1/4 rounded-xl object-cover"
          />
        </div>

        <div className="flex justify-between items-start max-w-6xl mx-auto text-white py-10">
          <div className="w-1/3 pr-5">
            <h2 className="text-4xl font-bold mb-3">About me</h2>
          </div>

          <div className="w-1/3 px-6">
            <h2 className="text-2xl font-bold mb-3">My vision</h2>
            <p className="text-gray-300">
              My vision is to become a Marketing leader in a good company. I want to share creative and honest ideas that make a positive change in people’s lives and in society.
            </p>
          </div>

          <div className="w-1/3 pl-6">
            <h2 className="text-2xl font-bold mb-3">My mission</h2>
            <p className="text-gray-300">
              My mission is to study Marketing to help brands connect with people in a real and positive way. I want to learn with responsibility, innovation, and perseverance, and inspire others to see things in a new way.
            </p>
          </div>
        </div>
      </section>

      <main className="bg-black text-white">
        <section className="flex justify-center items-center gap-10 py-20 bg-black">
          <div>
            <img
              src="/payof big.png"
              alt="Grande 1"
              className="w-[500px] h-[350px] object-cover rounded-xl"
            />
          </div>

          <div className="flex flex-col justify-start items-start">
            <img
              src="/payof logo.png"
              alt="Pequeña 1"
              className="w-[200px] h-[150px] object-cover rounded-xl mb-4"
            />
            <h2 className="text-2xl font-bold mb-2">My first project</h2>
            <p className="text-gray-300 max-w-md">
              PAYOF is a safe and trusted payment app that helps you organize your money. It lets you track income, expenses, and investments with clarity and security.
            </p>
            <Link href="https://www.figma.com/design/MF3LLRFcjSRr3aBLmnaM8p/PAYOF-2.0--Copy-?node-id=0-1&t=C9lQXWbZIT0Iqd5S-1">
              <button className="border border-white text-white font-semibold py-1 px-2 rounded-xl hover:bg-white hover:text-black transition duration-300 mt-4">
              Take a look
              </button>
            </Link>
          </div>
        </section>

        <section className="flex justify-center items-center gap-10 py-20 bg-black">
          <div>
            <img
              src="/dina.png"
              alt="Grande 2"
              className="w-[500px] h-[350px] object-cover rounded-xl"
            />
          </div>

          <div className="flex flex-col justify-start items-start">
            <img
              src="/dinatours logo.png"
              alt="Pequeña 2"
              className="w-[200px] h-[150px] object-cover rounded-xl mb-4"
            />
            <h2 className="text-2xl font-bold mb-2">My second project</h2>
            <p className="text-gray-300 max-w-md">
              DINAtours is a website that organizes tourist destinations by department, showing photos, locations, and available tours. It also includes a transport system where local drivers can register and offer their services, making it easier for tourists to reach each destination.
            </p>
            <Link href="https://dinatours.vercel.app/">
              <button className="border border-white text-white font-semibold py-1 px-2 rounded-xl hover:bg-white hover:text-black transition duration-300 mt-4">
              Take a look
              </button>
            </Link>
          </div>
        </section>

        <section className="flex justify-center items-center gap-10 py-20 bg-black">
          <div>
            <img
              src="/dexpert.png"
              alt="Grande 3"
              className="w-[500px] h-[350px] object-cover rounded-xl"
            />
          </div>

          <div className="flex flex-col justify-start items-start">
            <img
              src="/dexpert logo.png"
              alt="Pequeña 3"
              className="w-[200px] h-[150px] object-cover rounded-xl mb-4"
            />
            <h2 className="text-2xl font-bold mb-2">My third project</h2>
            <p className="text-gray-300 max-w-md">
              Dexpert is an inclusive platform that connects young people with no work experience to micro and small businesses, allowing them to participate in real projects, gain practice, develop skills, and strengthen their professional profile.
            </p>
            <Link href="https://dexpert-lake.vercel.app/">
              <button className="border border-white text-white font-semibold py-1 px-2 rounded-xl hover:bg-white hover:text-black transition duration-300 mt-4">
              Take a look
              </button>
            </Link>
          </div>
        </section>

        <section className="flex justify-center items-center gap-10 py-20 bg-black border-t border-gray-800">
          <div>
            <img
              src="/image (4).png"
              alt="Foto de contacto"
              className="h-[550px] w-auto rounded-xl"
            />
          </div>

          <div className="flex flex-col justify-center items-start">
            <p className="text-gray-300 max-w-md mb-4">
              This portfolio represents the beginning of my path in the world of Marketing. Each project shows my effort, learning, and desire to keep growing professionally. I hope this space helps you know more about my work and my passion for creating ideas with purpose. Thank you for your time and interest!
            </p>
            <h2 className="text-2xl font-bold mb-2">My contact</h2>
            <p className="text-blue-400 hover:underline mb-2">
            </p>
            <Link
              href="https://www.linkedin.com/in/itzel-anah%C3%AD-lino-096136368/" 
              target="_blank" 
              className="text-blue-400 hover:underline mt-2"
              >
                LinkedIn: Itzel Anahi Lino
              </Link>
            <p className="text-gray-300">Email: itzelino.tovar@gmail.com</p>
          </div>
        </section>
      </main>
    </main>
  );
}
