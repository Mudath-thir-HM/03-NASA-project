Please help

CODE FUCTIONALITY:
the root package.json has three main scripts I want to run;
"run install-server" which install the dependencies on the server,
"run install-client" which install the dependencies on the client, and
"run deploy" which runs the build script on the client and the build gets transferred to the server folder to be served to the backend as a static site.
The build script on the client side is currently "react-scripts build && mv build ../server/public".

WHAT I NEED HELP WITH:
I have been trying to host it on gitHub pages with GitHub actions, but I have been running into problems that I am now seeking help with, please help, I have made a deploy.yml in the .GitHub folder.
