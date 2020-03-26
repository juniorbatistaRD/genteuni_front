import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Formik, Form } from "formik";
import { motion } from "framer-motion";
import styles from "./index.module.css";
import Title from "../../../components/common/Title";
import InputField from "../../../components/common/InputField";
import Button from "../../../components/common/Button";
import SchoolItem from "./SchoolItem";
import * as Yup from "yup";
import "./custom.css";
import useSearchSchool from "./useSearchSchools";
import ErrorMessageInput from "../../../components/common/InputField/ErrorMessageInput";
import Spinner from "../../../components/common/Spinner";
import { ReactComponent as MoonIlustration } from "../../../assets/images/moon.svg";
import { ReactComponent as EmptyIlustration } from "../../../assets/images/empty.svg";

function SchoolSettings() {
  const [touched, setTouched] = useState(false);
  const {
    count,
    startFrom,
    query,
    setQuery,
    isLoading,
    schools,
    reset,
    loadMoreItems
  } = useSearchSchool();

  const onSubmit = values => {
    //avoid rerendering and refetching if query is the same
    if (values.search !== query) {
      reset();
      setTouched(true);
      setQuery(() => values.search);
    }
  };

  return (
    <motion.div
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      className={styles.container}
    >
      <Title text="Escuela" className={styles.title} />
      <Formik
        initialValues={{
          search: ""
        }}
        onSubmit={onSubmit}
        validationSchema={Yup.object({
          search: Yup.string()
            .min("1")
            .required("Necesitas especificar el nombre")
        })}
      >
        <Form className={styles.form}>
          <div className={styles.input}>
            <InputField
              name="search"
              width="200px"
              placeholder="Busca tu escuela"
            />
            <ErrorMessageInput name="search" />
          </div>
          <Button type="submit" margin="0px 0px 0px 10px">
            Buscar
          </Button>
        </Form>
      </Formik>

      <div className={styles.results}>
        {schools.length > 0 ? (
          <InfiniteScroll
            dataLength={count} //This is important field to render the next data
            next={loadMoreItems}
            hasMore={startFrom + 10 < count}
            loader={<h4>Cargando...</h4>}
          >
            {schools.map((school, index) => (
              <SchoolItem key={index} school={school} />
            ))}
          </InfiniteScroll>
        ) : (
          <div className={styles.noResults}>
            {isLoading ? (
              <div>
                <Title
                  text="Cargando..."
                  typeStyle="secondary"
                  fontSize="16px"
                />
                <Spinner />
              </div>
            ) : touched ? (
              <div className={styles.initialBox}>
                <Title text="No pudimos encontrar nada :(" fontSize="16px" />
                <Title text="Intenta con otras palabras" fontSize="16px" />
                <EmptyIlustration width="200px" height="200px" />
              </div>
            ) : (
              <div className={styles.initialBox}>
                <Title text="Vamos a buscar!" fontSize="16px" />
                <MoonIlustration width="200px" height="200px" />
              </div>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default SchoolSettings;
