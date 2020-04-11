import React from "react";
import Title from "../../components/common/Title";
import GoBackButton from "../../components/GoBackButton";
import FlexColumn from "../../components/common/FlexColumn";
import FlexRow from "../../components/common/FlexRow";
import useInfiniteScrolling from "../../hooks/useInfinteScrolling";
import { getUserFollowersWithPagination } from "../../data/queryFollows";
import InfiniteScroll from "react-infinite-scroller";
import UserListItem from "./components/UserListItem";
import { ReactComponent as EmptyIlustration } from "../../assets/images/empty.svg";
import styles from "./FollowersPage.module.css";

const FollowersPage = ({ user }) => {
  const { count, items, isLoading, startFrom, nextPage } = useInfiniteScrolling(
    {
      query: getUserFollowersWithPagination,
      perPage: 10,
      user,
    }
  );
  return (
    <FlexColumn margin="10px" className={styles.container}>
      <FlexRow alignItems="center">
        <GoBackButton />
        <Title text="Seguidores" />
      </FlexRow>

      {isLoading ? (
        "Cargando"
      ) : (
        <InfiniteScroll
          hasMore={startFrom + 10 < count}
          loadMore={nextPage}
          loader={"Cargando..."}
        >
          {items.map((item, index) => (
            <UserListItem key={item.id} user={item.attributes.fromUser} />
          ))}
        </InfiniteScroll>
      )}

      {count < 1 && !isLoading && (
        <FlexColumn margin="auto" alignItems="center">
          <Title
            text="Este usuario aun no sigue a nadie. El llanero solitario."
            fontSize="16px"
          />
          <EmptyIlustration width="200px" height="200px" />
        </FlexColumn>
      )}
    </FlexColumn>
  );
};

export default FollowersPage;
