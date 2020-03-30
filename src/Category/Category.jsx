import React, { Component } from 'react'
import MagList from "../MagList/MagList";
import Error from "../Error/Error";

import { Link } from "react-router-dom";

import styles from './Category.module.css';
import magazines from ".././data/magazines.json";
import Filter from '../Filter/Filter';


export default class Categroy extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectFilterMagList: null
    };
  }

  onChange = e => {

    let selectType;

    if (e.target.value) {
      selectType = e.target.value;
    }
    if (selectType) {
      let filtered;

      switch(selectType) {
        case "asc":
          filtered = this.onSortAtoZ(magazines);
          break;
        case "desc":
          filtered = this.onSortZtoA(magazines);
          break;
        case "lowToHigh":
          filtered = this.onSortLowToHigh(magazines);
          break;
        case "highToLow":
          filtered = this.onSortHighToLow(magazines);
          break;
        default:
          break;
      }

      this.setState({
        selectFilterMagList: filtered
      });
    }
  };

  onSortAtoZ = items => {
    return items.sort((a, b) => {
      if (a.title < b.title) {
        return -1;
      } else if (a.title > b.title) {
        return 1;
      }
      return 0;
    });
  };

  onSortZtoA = items => {
    return this.onSortAtoZ(items).reverse();
  };

  onSortLowToHigh = items => {
    return items.sort((a,b)=>{
      if (Number(a.ourPrice) < Number(b.ourPrice)) {
        return -1;
      } else if (Number(a.ourPrice) > Number(b.ourPrice)) {
        return 1;
      }
      return 0;
    });
  };

  onSortHighToLow = items => {
    return this.onSortLowToHigh(items).reverse();
  };

  render() {

    const filtedMagList = (this.props.categoryId === 'all') ? magazines : magazines.filter(mag => mag.categoryId === this.props.categoryId);

    if (filtedMagList === null || filtedMagList.length === 0) {
      return <Error />;
    }

    const displayMagList = filtedMagList || this.state.selectFilterMagList;

    const categoryName = (this.props.categoryId === 'all') ? '' : filtedMagList[0].categoryName;

    return (
      <div className={styles.container}>
        <div className={styles.main}>
          <section className={styles.categoryNames}>
            <div className={styles.title}>
              <h3>Categories</h3>
              <hr />
            </div>
            <Link className={styles.link} to="/category/all">All</Link>
            <Link className={styles.link} to="/category/avia-001">Aviation</Link>
            <Link className={styles.link} to="/category/comp-001">Computer</Link>
            <Link className={styles.link} to="/category/eng-001">Engineering</Link>
            <Link className={styles.link} to="/category/elec-001">Electronics</Link>
            <Link className={styles.link} to="/category/sci-001">Science</Link>
          </section>
          <section className={styles.display}>
            <div className={styles.categroyTitle}>
              <h3 className={styles.title}>{categoryName} Magazines</h3>
              <Filter className={styles.filter} onChange={this.onChange}/>
            </div>
            <div className={styles.categroylist}>
              <MagList magazines={displayMagList} />
            </div>
          </section>
        </div>
      </div>
    );
  }
}

