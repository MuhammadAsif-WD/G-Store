import React from "react";

const Blogs = () => {
  return (
    <div className="w-11/12 mx-auto">
      <div data-aos="zoom-in" className="pt-32 shadow-lg">
        <div className="pt-3 m-3">
          <h1 className="text-center text-secondary text-4xl font-bold mb-5">
            Java Script VS NodeJs
          </h1>
          <div className="grid grid-cols-2 gap-3 p-5 w-11/12 mx-auto">
            <div name="JavaScript" className="p-3 border">
              <h1 className="text-center text-secondary font-bold text-4xl mb-5">
                JavaScript
              </h1>
              <ul className="list-decimal w-11/12 mx-auto gap-y-5 flex flex-col text-black">
                <li>
                  JavaScript is a programming language. It is running in any web
                  browser with a proper browser engine.
                </li>
                <li>
                  Mainly using for any client-side activity for a web
                  application, like possible attribute validation or refreshing
                  the page in a specific interval or provide some dynamic
                  changes in web pages without refreshing the page.
                </li>
                <li>
                  JavaScript running any engine like Spider monkey (FireFox),
                  JavaScript Core (Safari), V8 (Google Chrome).
                </li>
              </ul>
            </div>
            <div>
              <div name="JavaScript" className="border p-5">
                <h1 className="text-center text-secondary font-bold text-4xl mb-5">
                  NodeJs
                </h1>
                <ul className="list-decimal w-11/12 mx-auto gap-y-5 flex flex-col text-black">
                  <li>
                    It is an interpreter and environment for JavaScript with
                    some specific useful libraries which JavaScript programming
                    can use separately.
                  </li>
                  <li>
                    It mainly used for accessing or performing any non-blocking
                    operation of any operating system, like creating or
                    executing a shell script or accessing any hardware-specific
                    information or running any backend job.
                  </li>
                  <li>
                    Node JS only run in a V8 engine which mainly used by google
                    chrome. And javascript program which will be written under
                    this Node JS will be always run in V8 Engine.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div data-aos="zoom-in" className="m-3  shadow-lg p-5">
        <h1 className="pt-5 text-center text-secondary text-2xl mt-16 font-bold mb-10">
          When should you use nodejs <br /> and when should you use mongodb
        </h1>
        <div className="pt-5 m-5 border p-5">
          <div>
            <h4 className="text-center text-secondary font-bold text-xl">
              NodeJS and MongoDB <br />
              are two different process.
            </h4>

            <div className="grid grid-cols-2 gap-3 p-5">
              <div name="JavaScript" className="border">
                <h1 className="text-center text-secondary font-bold text-4xl p-5">
                  NodeJS
                </h1>
                <ul className="p-5 text-black">
                  <li>
                    Shortly we can say, NodeJS is a JavaScript runtime
                    environment. It's actually helps JavaScript to run outside
                    of server. It's used in server side development.
                  </li>
                </ul>
              </div>
              <div>
                <div name="JavaScript" className="border">
                  <h1 className="pt-3 text-center text-secondary font-bold text-4xl">
                    MongoDB
                  </h1>
                  <ul className="p-5 text-black pb-16 pt-10">
                    <li>
                      But, MongoDB is NoSQL database which is document oriented.
                      It represents data as of JSON documents. It's used for
                      store data.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div>
            <p className="w-1/3 p-2 mx-auto border mb-5 text-black">
              MongoDB is a database where we can store data and NodeJS helps us
              to to connect our client site to database by it's server site.
            </p>
          </div>
        </div>
      </div>
      <div data-aos="zoom-in" className="mt-16 pt-5 shadow-lg bg-slate-100">
        <div>
          <h1 className="text-center text-secondary text-2xl font-bold mb-3">
            Differences between SQL and No SQL databases.
          </h1>
          <h1 className="pt-5 text-center text-secondary font-bold text-4xl">
            SQL vs NoSQL
          </h1>
          <div className="grid grid-cols-2 gap-3 p-5 mb-10">
            <div name="JavaScript" className="p-3 border">
              <h1 className="text-center text-secondary font-bold text-4xl">
                SQL
              </h1>
              <ul className="list-decimal w-11/12 mx-auto text-black p-5 leading-relaxed">
                <li>SQL databases are relational.</li>
                <li>
                  SQL databases use structured query language and have a
                  predefined schema.
                </li>
                <li>SQL databases are vertically scalable</li>
                <li>SQL databases are table-based</li>
                <li>SQL databases are better for multi-row transactions</li>
              </ul>
            </div>
            <div>
              <div name="JavaScript" className="border">
                <h1 className="pt-4 pb-5 text-center text-secondary font-bold text-4xl">
                  No SQL
                </h1>
                <ul className="list-decimal w-11/12 mx-auto text-black p-5 leading-relaxed">
                  <li>NoSQL databases are non-relational.</li>
                  <li>
                    NoSQL databases have dynamic schemas for unstructured data.
                  </li>
                  <li>NoSQL databases are horizontally scalable.</li>
                  <li>
                    NoSQL databases are document, key-value, graph, or
                    wide-column stores.
                  </li>
                  <li>
                    NoSQL is better for unstructured data like documents or
                    JSON.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
