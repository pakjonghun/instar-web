import {
  faFacebookSquare,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import BottomBox from "../components/BottomBox";
import Button from "../components/Button";
import AuthLayout from "../components/Container";
import Divider from "../components/Divider";
import FormBox from "../components/FormBox";
import Input from "../components/Input";
import { FatLink } from "../components/share";
import routes from "../routes";
import { PageTitle } from "../helmet";
import { useForm } from "react-hook-form";
import ErrorMessage from "../components/Error";
import gql from "graphql-tag";
import { useMutation } from "@apollo/client";
import { logUserIn } from "../apollo";

const FaceBook = styled.div`
  color: ${({ theme }) => theme.deepBlue};
  font-weight: 600;
  span {
    margin-right: 5px;
  }
`;

const LOGIN_MUTATION = gql`
  mutation login($password: String, $userName: String) {
    login(userName: $userName, password: $password) {
      ok
      data
      error
    }
  }
`;

const Login = () => {
  const {
    register,
    watch,
    handleSubmit,
    errors,
    formState,
    setError,
    clearErrors,
  } = useForm({
    mode: "onChange",
  });

  const [login, { loading }] = useMutation(LOGIN_MUTATION, {
    onCompleted: ({ login: { ok, data, error } }) => {
      if (data) {
        logUserIn();
      } else if (!ok) {
        setError("error", { message: error });
      }
    },
  });

  const onSubmitValid = () => {
    if (loading) {
      return;
    } else {
      login({
        variables: { userName: watch().userName, password: watch().passWord },
      });
    }
  };

  const ByeError = () => {
    clearErrors("error");
  };

  return (
    <AuthLayout>
      <PageTitle title={"Login | InstarClone"} />
      <FormBox>
        <FontAwesomeIcon icon={faInstagram} size="3x" />
        <form onSubmit={handleSubmit(onSubmitValid)}>
          <Input
            ref={register({
              required: "Name is Rrequired",
              minLength: {
                value: 2,
                message: "at least 2 chars",
              },
            })}
            onChange={ByeError}
            name="userName"
            type="text"
            placeholder="name"
            errors={errors?.userName?.message ? true : false}
          />
          <ErrorMessage value={errors?.error?.message} />
          <Input
            ref={register({ required: "Password is Required", minLength: 1 })}
            name="passWord"
            type="password"
            placeholder="password"
            errors={errors?.passWord?.message ? true : false}
            onChange={ByeError}
          />
          <ErrorMessage value={errors?.passWord?.message} />
          <Button
            type="submit"
            value={loading ? "loading..." : "login"}
            disabled={!formState.isValid || loading}
          />
        </form>
        <Divider />

        <FaceBook>
          <span>FaceBook으로 로그인</span>
          <FontAwesomeIcon icon={faFacebookSquare} />
        </FaceBook>
      </FormBox>
      <BottomBox>
        <span>계정이 없으신가요?</span>
        <FatLink to={routes.signUp}>가입하기</FatLink>
      </BottomBox>
    </AuthLayout>
  );
};
export default Login;
