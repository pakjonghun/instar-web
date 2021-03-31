import { useMutation } from "@apollo/client";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import gql from "graphql-tag";
import React from "react";
import { useForm } from "react-hook-form";
import styled, { createGlobalStyle } from "styled-components";
import BottomBox from "../components/BottomBox";
import Button from "../components/Button";
import AuthLayout from "../components/Container";
import Divider from "../components/Divider";
import ErrorMessage from "../components/Error";
import FormBox from "../components/FormBox";
import Input from "../components/Input";
import { FatLink } from "../components/share";
import { PageTitle } from "../helmet";
import routes from "../routes";

const SFromBox = styled(FormBox)``;

const SButton = styled(Button)`
  margin-top: 15px;
`;

const Plot = styled(FatLink)`
  margin-top: 15px;
  line-height: 130%;
  text-align: center;
  color: ${({ theme }) => theme.gray};
  font-size: 18px;
`;

const CREATE_ACCOUNT_MUTATION = gql`
  mutation createAcount(
    $userName: String!
    $firstName: String!
    $password: String!
    $email: String!
  ) {
    createAcount(
      userName: $userName
      firstName: $firstName
      password: $password
      email: $email
    ) {
      ok
      error
    }
  }
`;

const SignUp = () => {
  const {
    errors,
    handleSubmit,
    register,
    formState,
    setError,
    clearErrors,
  } = useForm({
    mode: "onChange",
  });
  const [createacount, { loading }] = useMutation(CREATE_ACCOUNT_MUTATION, {
    onCompleted: ({ createAcount: { ok, error } }) => {
      if (ok) {
        //넘어가고
      } else if (!ok) {
        //에러띄우고
        setError("result", { message: error });
      }
      {
      }
    },
  });

  const onsubmit = (data) => {
    const { password, email, userName, firstName } = data;

    if (loading) {
      return;
    } else {
      createacount({
        variables: {
          password: String(password),
          userName: String(userName),
          firstName: String(firstName),
          email,
        },
      });
    }
  };

  const byeError = () => {
    clearErrors("result");
  };

  return (
    <AuthLayout>
      <PageTitle title={"SignUp | InstarClone"} />
      <SFromBox>
        <FontAwesomeIcon icon={faInstagram} size="3x" />
        <Plot to="//#endregion">
          친구들의 사진과 동영상을 보려면 가입하세요.
        </Plot>
        <SButton value="Facebook으로 로그인" type="submit" />
        <Divider />
        <form onSubmit={handleSubmit(onsubmit)}>
          <Input
            onChange={byeError}
            errors={errors?.email?.message ? true : false}
            type="text"
            placeholder="email or phone"
            name="email"
            ref={register({ required: "email plz" })}
          />
          <ErrorMessage value={errors?.email?.message} />
          <Input
            onChange={byeError}
            errors={errors?.userName?.message ? true : false}
            type="text"
            placeholder="name"
            name="userName"
            ref={register({ required: "name is required" })}
          />
          <ErrorMessage value={errors?.userName?.message} />
          <Input
            onChange={byeError}
            type="text"
            placeholder="firstname"
            name="firstName"
            ref={register({
              required: "firstName is required",
              minLength: { value: 2, message: "at least 2 plz" },
            })}
            errors={errors?.firstName?.message ? true : false}
          />
          <ErrorMessage value={errors?.firstName?.message} />
          <Input
            onChange={byeError}
            errors={errors?.password?.message ? true : false}
            type="password"
            placeholder="password"
            name="password"
            ref={register({
              required: "password is require",
              minLength: { value: 2, message: "at least 2 plz" },
            })}
          />
          <ErrorMessage value={errors?.password?.message} />
          <Button
            value="가입"
            type="submit"
            disabled={!formState.isValid || loading}
          />
          <ErrorMessage value={errors?.result?.message} />
        </form>
      </SFromBox>
      <BottomBox>
        <span>계정이 있으신가요?</span>
        <FatLink to={routes.home}>로그인</FatLink>
      </BottomBox>
    </AuthLayout>
  );
};

export default SignUp;
