import styles from "./Search.module.css";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useQuery } from "../hooks/useQuery";
import { useEffect } from "react";

export function Search() {
    const query = useQuery();
    const search = query.get("search");


    const history = useHistory();

/*     useEffect(() => {
        setsearchText(search || "");
    }, [search]); /* SI CAMBIA LA BUSQUEDA */ 


  const handleSubmit = (e) => {
    e.preventDefault();

  };
  return (
    <form className={styles.searchContainer} onSubmit={handleSubmit}>
      <div className={styles.searchBox}>
        <input
          className={styles.searchInput}
          type="text"
          value={search}
          onChange={(e) => {
            const value = e.target.value;

             history.push("/?search="+ value);
          }} /*Le estoy diciendo que cambie el setSearchText por el value que es SearchText(input de busqueda.) */
        />
        <button className={styles.searchButton} type="submit">
          <FaSearch size={20} />
        </button>
      </div>
    </form>
  );
}
