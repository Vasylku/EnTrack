import { React } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
	return (
		<div className="h-screen w-full flex flex-col justify-center items-center bg-neutral-800">
			<h1 className="text-9xl font-extrabold text-white tracking-widest">
				404
			</h1>
			<div className="bg-[#a52a2a] px-2 text-sm rounded rotate-12 absolute">
				Page Not Found
			</div>
			<button className="mt-5 animate-bounce">
				<div className="relative inline-block text-sm font-medium text-[#a9ba9d] group active:text-orange-500 focus:outline-none focus:ring">
					<span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#a9ba9d] group-hover:translate-y-0 group-hover:translate-x-0"></span>

					<span className="relative block px-8 py-3 bg-[#712608] border border-current">
						<Link to="/">Go Home</Link>
					</span>
				</div>
			</button>
		</div>
	);
};
export default NotFound;
