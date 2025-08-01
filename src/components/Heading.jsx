function Head() {
    return (
        <>
            <header
                className="shadow-lg h-96 flex items-center justify-center"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                {/* Small screen version */}
                <h1 className="text-2xl font-bold font-serif flex items-center justify-center p-4 
                bg-black/80 text-[#e9dc9f] rounded-lg backdrop-blur-md md:hidden">
                    EAT RIGHT, <br />
                    FOR A HEALTHIER LIFE
                </h1>

                {/* Large screen version */}
                <h1 className="hidden md:flex text-3xl font-bold font-serif items-center justify-center p-9 
                bg-black/80 text-[#e9dc9f] rounded-lg backdrop-blur-md">
                    EAT RIGHT, FOR A HEALTHIER LIFE
                </h1>
            </header>
        </>
    );
}

export default Head;
