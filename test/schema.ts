import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
}

export interface AB {
  readonly __typename?: 'AB';
  readonly a?: Maybe<Scalars['String']>;
  readonly b?: Maybe<Scalars['String']>;
}

export interface ABInput {
  readonly a?: InputMaybe<Scalars['String']>;
  readonly b?: InputMaybe<Scalars['String']>;
}

export interface HelloWorld {
  readonly __typename?: 'HelloWorld';
  readonly greeting?: Maybe<Scalars['String']>;
  readonly name?: Maybe<Scalars['String']>;
}

export interface Message {
  readonly __typename?: 'Message';
  readonly date?: Maybe<Scalars['String']>;
  readonly message?: Maybe<Scalars['String']>;
  readonly user?: Maybe<Scalars['String']>;
}

export interface Mutation {
  readonly __typename?: 'Mutation';
  readonly inputParam?: Maybe<AB>;
  readonly noParam?: Maybe<NoParam>;
  readonly nonNullableParam?: Maybe<NonNull>;
  readonly nullableParam?: Maybe<Nullable>;
  readonly reset?: Maybe<ReadonlyArray<Maybe<Message>>>;
  readonly sendMessage?: Maybe<Message>;
  readonly updateUser?: Maybe<User>;
}


export interface MutationinputParamArgs {
  input?: InputMaybe<ABInput>;
}


export interface MutationnonNullableParamArgs {
  nonNull: Scalars['String'];
}


export interface MutationnullableParamArgs {
  delay?: InputMaybe<Scalars['Int']>;
  nullable?: InputMaybe<Scalars['String']>;
}


export interface MutationsendMessageArgs {
  message?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<Scalars['String']>;
}


export interface MutationupdateUserArgs {
  haircolor: Scalars['String'];
  username: Scalars['String'];
}

export interface NoParam {
  readonly __typename?: 'NoParam';
  readonly noParam?: Maybe<Scalars['String']>;
}

export interface NonNull {
  readonly __typename?: 'NonNull';
  readonly nonNull: Scalars['String'];
}

export interface Nullable {
  readonly __typename?: 'Nullable';
  readonly nullable?: Maybe<Scalars['String']>;
}

export interface Paged {
  readonly __typename?: 'Paged';
  readonly pages?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
}

export interface Query {
  readonly __typename?: 'Query';
  readonly helloWorld?: Maybe<HelloWorld>;
  readonly messages?: Maybe<ReadonlyArray<Maybe<Message>>>;
  readonly noParam?: Maybe<NoParam>;
  readonly nonNullParam?: Maybe<NonNull>;
  readonly nullableParam?: Maybe<Nullable>;
  readonly pages?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
}


export interface QueryhelloWorldArgs {
  greeting?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
}


export interface QuerynonNullParamArgs {
  nonNull: Scalars['String'];
}


export interface QuerynullableParamArgs {
  delay?: InputMaybe<Scalars['Int']>;
  nullable?: InputMaybe<Scalars['String']>;
}


export interface QuerypagesArgs {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
}

export interface Subscription {
  readonly __typename?: 'Subscription';
  readonly messageSent?: Maybe<Message>;
  readonly noParam?: Maybe<NoParam>;
  readonly nonNullParam?: Maybe<NonNull>;
  readonly nullableParam?: Maybe<Nullable>;
  readonly pageAdded?: Maybe<Scalars['Int']>;
}


export interface SubscriptionnonNullParamArgs {
  nonNull: Scalars['String'];
}


export interface SubscriptionnullableParamArgs {
  delay?: InputMaybe<Scalars['Int']>;
  nullable?: InputMaybe<Scalars['String']>;
}

export interface User {
  readonly __typename?: 'User';
  readonly haircolor?: Maybe<Scalars['String']>;
  readonly nickname?: Maybe<Scalars['String']>;
  readonly username?: Maybe<Scalars['String']>;
}

export type HelloQueryVariables = Exact<{
  name?: InputMaybe<Scalars['String']>;
  greeting?: InputMaybe<Scalars['String']>;
}>;


export type HelloQueryData = { readonly __typename?: 'Query', readonly helloWorld?: { readonly __typename?: 'HelloWorld', readonly name?: string | null, readonly greeting?: string | null } | null };

export type InputParamMutationVariables = Exact<{
  input: ABInput;
}>;


export type InputParamMutationData = { readonly __typename?: 'Mutation', readonly inputParam?: { readonly __typename?: 'AB', readonly a?: string | null, readonly b?: string | null } | null };

export type MessageSentSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type MessageSentSubscriptionData = { readonly __typename?: 'Subscription', readonly messageSent?: { readonly __typename?: 'Message', readonly message?: string | null } | null };

export type MessagesQueryVariables = Exact<{ [key: string]: never; }>;


export type MessagesQueryData = { readonly __typename?: 'Query', readonly messages?: ReadonlyArray<{ readonly __typename?: 'Message', readonly message?: string | null } | null> | null };

export type NoParamMutationVariables = Exact<{ [key: string]: never; }>;


export type NoParamMutationData = { readonly __typename?: 'Mutation', readonly noParam?: { readonly __typename?: 'NoParam', readonly noParam?: string | null } | null };

export type NoParamQueryVariables = Exact<{ [key: string]: never; }>;


export type NoParamQueryData = { readonly __typename?: 'Query', readonly noParam?: { readonly __typename?: 'NoParam', readonly noParam?: string | null } | null };

export type NoParamSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type NoParamSubscriptionData = { readonly __typename?: 'Subscription', readonly noParam?: { readonly __typename?: 'NoParam', readonly noParam?: string | null } | null };

export type NonNullableParamMutationVariables = Exact<{
  param: Scalars['String'];
}>;


export type NonNullableParamMutationData = { readonly __typename?: 'Mutation', readonly noParam?: { readonly __typename?: 'NoParam', readonly noParam?: string | null } | null };

export type NonNullableParamQueryVariables = Exact<{
  nonNull: Scalars['String'];
}>;


export type NonNullableParamQueryData = { readonly __typename?: 'Query', readonly nonNullParam?: { readonly __typename?: 'NonNull', readonly nonNull: string } | null };

export type NonNullableParamSubscriptionVariables = Exact<{
  nonNull: Scalars['String'];
}>;


export type NonNullableParamSubscriptionData = { readonly __typename?: 'Subscription', readonly nonNullParam?: { readonly __typename?: 'NonNull', readonly nonNull: string } | null };

export type NullableParamMutationVariables = Exact<{
  nullable?: InputMaybe<Scalars['String']>;
  delay?: InputMaybe<Scalars['Int']>;
}>;


export type NullableParamMutationData = { readonly __typename?: 'Mutation', readonly nullableParam?: { readonly __typename?: 'Nullable', readonly nullable?: string | null } | null };

export type NullableParamQueryVariables = Exact<{
  nullable?: InputMaybe<Scalars['String']>;
  delay?: InputMaybe<Scalars['Int']>;
}>;


export type NullableParamQueryData = { readonly __typename?: 'Query', readonly nullableParam?: { readonly __typename?: 'Nullable', readonly nullable?: string | null } | null };

export type NullableParamSubscriptionVariables = Exact<{
  nullable?: InputMaybe<Scalars['String']>;
  delay?: InputMaybe<Scalars['Int']>;
}>;


export type NullableParamSubscriptionData = { readonly __typename?: 'Subscription', readonly nullableParam?: { readonly __typename?: 'Nullable', readonly nullable?: string | null } | null };

export type PageAddedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type PageAddedSubscriptionData = { readonly __typename?: 'Subscription', readonly pageAdded?: number | null };

export type PaginatedQueryVariables = Exact<{
  offset?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
}>;


export type PaginatedQueryData = { readonly __typename?: 'Query', readonly pages?: ReadonlyArray<number | null> | null };

export type UpdateUserMutationVariables = Exact<{
  username: Scalars['String'];
  haircolor: Scalars['String'];
}>;


export type UpdateUserMutationData = { readonly __typename?: 'Mutation', readonly updateUser?: { readonly __typename?: 'User', readonly nickname?: string | null } | null };


export const HelloQuery = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"HelloQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"greeting"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"helloWorld"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"Argument","name":{"kind":"Name","value":"greeting"},"value":{"kind":"Variable","name":{"kind":"Name","value":"greeting"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"greeting"}}]}}]}}]} as unknown as DocumentNode<HelloQueryData, HelloQueryVariables>;
export const InputParamMutation = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"InputParamMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ABInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"inputParam"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"a"}},{"kind":"Field","name":{"kind":"Name","value":"b"}}]}}]}}]} as unknown as DocumentNode<InputParamMutationData, InputParamMutationVariables>;
export const MessageSentSubscription = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"MessageSentSubscription"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"messageSent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]} as unknown as DocumentNode<MessageSentSubscriptionData, MessageSentSubscriptionVariables>;
export const MessagesQuery = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MessagesQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"messages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]} as unknown as DocumentNode<MessagesQueryData, MessagesQueryVariables>;
export const NoParamMutation = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"NoParamMutation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"noParam"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"noParam"}}]}}]}}]} as unknown as DocumentNode<NoParamMutationData, NoParamMutationVariables>;
export const NoParamQuery = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"NoParamQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"noParam"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"noParam"}}]}}]}}]} as unknown as DocumentNode<NoParamQueryData, NoParamQueryVariables>;
export const NoParamSubscription = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"NoParamSubscription"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"noParam"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"noParam"}}]}}]}}]} as unknown as DocumentNode<NoParamSubscriptionData, NoParamSubscriptionVariables>;
export const NonNullableParamMutation = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"NonNullableParamMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"param"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"noParam"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"noParam"}}]}}]}}]} as unknown as DocumentNode<NonNullableParamMutationData, NonNullableParamMutationVariables>;
export const NonNullableParamQuery = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"NonNullableParamQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"nonNull"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nonNullParam"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"nonNull"},"value":{"kind":"Variable","name":{"kind":"Name","value":"nonNull"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nonNull"}}]}}]}}]} as unknown as DocumentNode<NonNullableParamQueryData, NonNullableParamQueryVariables>;
export const NonNullableParamSubscription = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"NonNullableParamSubscription"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"nonNull"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nonNullParam"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"nonNull"},"value":{"kind":"Variable","name":{"kind":"Name","value":"nonNull"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nonNull"}}]}}]}}]} as unknown as DocumentNode<NonNullableParamSubscriptionData, NonNullableParamSubscriptionVariables>;
export const NullableParamMutation = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"NullableParamMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"nullable"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"delay"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nullableParam"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"nullable"},"value":{"kind":"Variable","name":{"kind":"Name","value":"nullable"}}},{"kind":"Argument","name":{"kind":"Name","value":"delay"},"value":{"kind":"Variable","name":{"kind":"Name","value":"delay"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nullable"}}]}}]}}]} as unknown as DocumentNode<NullableParamMutationData, NullableParamMutationVariables>;
export const NullableParamQuery = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"NullableParamQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"nullable"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"delay"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nullableParam"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"nullable"},"value":{"kind":"Variable","name":{"kind":"Name","value":"nullable"}}},{"kind":"Argument","name":{"kind":"Name","value":"delay"},"value":{"kind":"Variable","name":{"kind":"Name","value":"delay"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nullable"}}]}}]}}]} as unknown as DocumentNode<NullableParamQueryData, NullableParamQueryVariables>;
export const NullableParamSubscription = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"NullableParamSubscription"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"nullable"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"delay"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nullableParam"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"nullable"},"value":{"kind":"Variable","name":{"kind":"Name","value":"nullable"}}},{"kind":"Argument","name":{"kind":"Name","value":"delay"},"value":{"kind":"Variable","name":{"kind":"Name","value":"delay"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nullable"}}]}}]}}]} as unknown as DocumentNode<NullableParamSubscriptionData, NullableParamSubscriptionVariables>;
export const PageAddedSubscription = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"PageAddedSubscription"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageAdded"}}]}}]} as unknown as DocumentNode<PageAddedSubscriptionData, PageAddedSubscriptionVariables>;
export const PaginatedQuery = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PaginatedQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"defaultValue":{"kind":"IntValue","value":"0"}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"defaultValue":{"kind":"IntValue","value":"10"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pages"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}]}]}}]} as unknown as DocumentNode<PaginatedQueryData, PaginatedQueryVariables>;
export const UpdateUserMutation = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateUserMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"haircolor"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}},{"kind":"Argument","name":{"kind":"Name","value":"haircolor"},"value":{"kind":"Variable","name":{"kind":"Name","value":"haircolor"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nickname"}}]}}]}}]} as unknown as DocumentNode<UpdateUserMutationData, UpdateUserMutationVariables>;