import React from "react";
import Title from "../../../components/common/Title";
import useGifts from "./useGifts";
import InfiniteScroll from "react-infinite-scroller";
import Gift from "./Gift";
import styles from "./index.module.css";

function GiftSection({ user }) {
  const { startFrom, count, nextPage, gifts } = useGifts(user);

  console.log([startFrom, count, nextPage, gifts]);
  return (
    <div>
      <Title text="Regalos" margin="10px"></Title>

      <InfiniteScroll hasMore={startFrom < count} loadMore={nextPage}>
        <div className={styles.giftsContainer}>
          {gifts.map(gift => (
            <Gift
              key={gift.id}
              image={gift.attributes.gift.attributes.image?.url()}
              fromUser={gift.attributes.fromUser}
              text={gift.attributes.gift.attributes.name}
            />
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
}

export default GiftSection;
