import React, { useState } from "react";

const Calculator = () => {
  const [data, setData] = useState("");

  const getValue = (e) => {
    const value = e.target.value;
    setData((prev) => {
      // If input is "0" and next value is also "0", do nothing
      if (prev === "0" && value === "0") return prev;

      // If input is "0" and next value is a number (1-9), replace it
      if (prev === "0" && /[1-9]/.test(value)) return value;

      // If input is "0" and next value is an operator or ".", allow it
      if (prev === "0" && /[+\-*/.%]/.test(value)) return prev + value;

      return prev + value;
    });
  };

  const calculation = () => {
    try {
      // eslint-disable-next-line no-eval
      setData(eval(data).toString());
    } catch {
      setData("Error");
    }
  };

  const deleteValue = () => {
    setData((prev) => prev.slice(0, -1));
  };

  const allClear = () => {
    setData("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200">
      <div className="bg-white p-6 rounded-2xl shadow-xl w-80">
        <div className="flex justify-end mb-2">
          <a
            href="https://portfolio-lt6p.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-5 py-2 rounded-full bg-green-500 text-white font-semibold shadow-md hover:bg-green-600 transition duration-300 ease-in-out"
          >
            Contact Me
          </a>
        </div>
        {/* Input box */}
        <div className="mb-4">
          <input
            type="text"
            value={data}
            placeholder="0"
            className="w-full text-right text-2xl p-3 border rounded-lg focus:outline-none bg-gray-50"
            readOnly
          />
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-4 gap-3 text-lg">
          <button
            onClick={allClear}
            className="bg-red-400 text-white py-3 rounded-lg"
          >
            AC
          </button>
          <button
            onClick={getValue}
            value="("
            className="bg-gray-200 py-3 rounded-lg"
          >
            (
          </button>
          <button
            onClick={getValue}
            value=")"
            className="bg-gray-200 py-3 rounded-lg"
          >
            )
          </button>
          <button
            onClick={getValue}
            value="/"
            className="bg-gray-200 py-3 rounded-lg"
          >
            /
          </button>

          <button
            onClick={getValue}
            value="7"
            className="bg-gray-100 py-3 rounded-lg"
          >
            7
          </button>
          <button
            onClick={getValue}
            value="8"
            className="bg-gray-100 py-3 rounded-lg"
          >
            8
          </button>
          <button
            onClick={getValue}
            value="9"
            className="bg-gray-100 py-3 rounded-lg"
          >
            9
          </button>
          <button
            onClick={getValue}
            value="*"
            className="bg-yellow-300 py-3 rounded-lg"
          >
            *
          </button>

          <button
            onClick={getValue}
            value="4"
            className="bg-gray-100 py-3 rounded-lg"
          >
            4
          </button>
          <button
            onClick={getValue}
            value="5"
            className="bg-gray-100 py-3 rounded-lg"
          >
            5
          </button>
          <button
            onClick={getValue}
            value="6"
            className="bg-gray-100 py-3 rounded-lg"
          >
            6
          </button>
          <button
            onClick={getValue}
            value="-"
            className="bg-yellow-300 py-3 rounded-lg"
          >
            -
          </button>

          <button
            onClick={getValue}
            value="1"
            className="bg-gray-100 py-3 rounded-lg"
          >
            1
          </button>
          <button
            onClick={getValue}
            value="2"
            className="bg-gray-100 py-3 rounded-lg"
          >
            2
          </button>
          <button
            onClick={getValue}
            value="3"
            className="bg-gray-100 py-3 rounded-lg"
          >
            3
          </button>
          <button
            onClick={getValue}
            value="+"
            className="bg-yellow-300 py-3 rounded-lg"
          >
            +
          </button>

          <button
            onClick={getValue}
            value="0"
            className="bg-gray-100 py-3 rounded-lg col-span-1"
          >
            0
          </button>
          <button
            onClick={getValue}
            value="."
            className="bg-gray-100 py-3 rounded-lg"
          >
            .
          </button>
          <button
            onClick={deleteValue}
            className="bg-orange-400 text-white py-3 rounded-lg"
          >
            DEL
          </button>

          <button
            onClick={calculation}
            value="="
            className="bg-green-500 text-white py-3 rounded-lg"
          >
            =
          </button>
          
        </div>


        
      </div>
      
    </div>
  );
};

export default Calculator;
