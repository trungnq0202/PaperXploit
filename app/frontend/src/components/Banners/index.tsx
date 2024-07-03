import classNames from "classnames"
import { useState } from "react"
import animatedSearchIcon from "/icons8-search.gif"
import searchIcon from "/icons8-search-static.svg"

export const Banner = () => {
    const [searchResults, setSearchResults] = useState(false)

    return (
        <div className="flex flex-col justify-center items-center text-center mt-20 ">
            <h1 className="text-3xl">Explore connected papers in a visual graph</h1>

            <h2 className="text-xl mt-8">
                Explore connected papers in a visual graph
            </h2>

            <div className="w-full flex justify-center mt-8 px-3 pt-3">
                <form className="w-2/5 min-w-96">
                    <div className="relative flex">
                        <input
                            type="search"
                            id="default-search"
                            className={classNames(
                                "w-full p-3 px-4 outline-none text-sm  text-gray-900 border border-gray-300 shadow-md hover:shadow-lg focus:shadow-lg transition duration-300",
                                searchResults ? "rounded-t-3xl border-b-0" : "rounded-full",
                            )}
                            placeholder="Search by keywords, paper title, DOI or another identifier"
                            required
                        />
                        <button
                            onClick={e => {
                                e.preventDefault()
                                console.log("Clicked")
                                setSearchResults(!searchResults)
                            }}
                            className={classNames(
                                "h-full text-white absolute right-0 bg-brand-red text-sm px-9 transition duration-300 hover:bg-brand-dark-red",
                                searchResults ? "rounded-t-3xl rounded-bl-3xl" : "rounded-full",
                            )}
                        >
                            Build a Graph
                        </button>
                    </div>
                </form>
            </div>

            {searchResults && (
                <div className="w-full flex justify-center px-3">
                    <div className="w-2/5 min-w-96 p-4 border border-gray-300 rounded-b-3xl">
                        <div className="flex flex-1 flex-row">
                            {searchResults ? <img src={animatedSearchIcon} className="w-6 mr-4" alt="loading..." /> : <img src={searchIcon} className="w-6 mr-4" alt="search-icon" />}
                            <p className="text-sm">See all papers suggestion for "..."</p>
                        </div>

                    </div>
                </div>
            )}
        </div>
    )
}
