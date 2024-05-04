function Siderbar() {
    return (
        <div className="bg-gray-300 w-64 left-0 fixed
          overflow-y-auto fixed h-screen border-b-4 border-gray-500 pb-96">
            <div>
                <h2 className="text-white">On vous guide</h2    >
            </div>

            <div>
                <a href="#" className="font-bold block text-black hover:text-red-700 py-2 px-4">VINS</a>
                <a href="#" className="font-bold block text-black hover:text-red-700 py-2 px-4">GRANDS VINS</a>
                <a href="#" className="font-bold block text-black hover:text-red-700 py-2 px-4">BIERE</a>
                <a href="#" className="font-bold block text-black hover:text-red-700 py-2 px-4">CHAMPAGNES</a>
                <a href="#" className="font-bold block text-black hover:text-red-700 py-2 px-4">WISKY</a>
                <a href="#" className="font-bold block text-black hover:text-red-700 py-2 px-4">VODKA</a>
                
            </div>
        </div>


        
    );
}

export default Siderbar;
