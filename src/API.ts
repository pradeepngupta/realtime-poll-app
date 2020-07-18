/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreatePollInput = {
  id?: string | null,
  name: string,
  type: PollType,
  itemType?: string | null,
  createdAt?: string | null,
};

export enum PollType {
  image = "image",
  text = "text",
}


export type ModelPollConditionInput = {
  name?: ModelStringInput | null,
  type?: ModelPollTypeInput | null,
  itemType?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelPollConditionInput | null > | null,
  or?: Array< ModelPollConditionInput | null > | null,
  not?: ModelPollConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelPollTypeInput = {
  eq?: PollType | null,
  ne?: PollType | null,
};

export type UpdatePollInput = {
  id: string,
  name?: string | null,
  type?: PollType | null,
  itemType?: string | null,
  createdAt?: string | null,
};

export type DeletePollInput = {
  id?: string | null,
};

export type CreateCandidateInput = {
  id?: string | null,
  pollCandidatesId?: string | null,
  image?: string | null,
  name?: string | null,
  upvotes?: number | null,
};

export type ModelCandidateConditionInput = {
  pollCandidatesId?: ModelIDInput | null,
  image?: ModelStringInput | null,
  name?: ModelStringInput | null,
  upvotes?: ModelIntInput | null,
  and?: Array< ModelCandidateConditionInput | null > | null,
  or?: Array< ModelCandidateConditionInput | null > | null,
  not?: ModelCandidateConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateCandidateInput = {
  id: string,
  pollCandidatesId?: string | null,
  image?: string | null,
  name?: string | null,
  upvotes?: number | null,
};

export type DeleteCandidateInput = {
  id?: string | null,
};

export type ModelPollFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  type?: ModelPollTypeInput | null,
  itemType?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelPollFilterInput | null > | null,
  or?: Array< ModelPollFilterInput | null > | null,
  not?: ModelPollFilterInput | null,
};

export type ModelCandidateFilterInput = {
  id?: ModelIDInput | null,
  pollCandidatesId?: ModelIDInput | null,
  image?: ModelStringInput | null,
  name?: ModelStringInput | null,
  upvotes?: ModelIntInput | null,
  and?: Array< ModelCandidateFilterInput | null > | null,
  or?: Array< ModelCandidateFilterInput | null > | null,
  not?: ModelCandidateFilterInput | null,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type UpVoteMutationVariables = {
  id?: string | null,
  clientId?: string | null,
};

export type UpVoteMutation = {
  upVote:  {
    __typename: "VoteType",
    id: string | null,
    clientId: string | null,
  } | null,
};

export type CreatePollMutationVariables = {
  input: CreatePollInput,
  condition?: ModelPollConditionInput | null,
};

export type CreatePollMutation = {
  createPoll:  {
    __typename: "Poll",
    id: string,
    name: string,
    type: PollType,
    itemType: string | null,
    candidates:  {
      __typename: "ModelCandidateConnection",
      items:  Array< {
        __typename: "Candidate",
        id: string,
        pollCandidatesId: string | null,
        image: string | null,
        name: string | null,
        upvotes: number | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string | null,
    updatedAt: string,
  } | null,
};

export type UpdatePollMutationVariables = {
  input: UpdatePollInput,
  condition?: ModelPollConditionInput | null,
};

export type UpdatePollMutation = {
  updatePoll:  {
    __typename: "Poll",
    id: string,
    name: string,
    type: PollType,
    itemType: string | null,
    candidates:  {
      __typename: "ModelCandidateConnection",
      items:  Array< {
        __typename: "Candidate",
        id: string,
        pollCandidatesId: string | null,
        image: string | null,
        name: string | null,
        upvotes: number | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string | null,
    updatedAt: string,
  } | null,
};

export type DeletePollMutationVariables = {
  input: DeletePollInput,
  condition?: ModelPollConditionInput | null,
};

export type DeletePollMutation = {
  deletePoll:  {
    __typename: "Poll",
    id: string,
    name: string,
    type: PollType,
    itemType: string | null,
    candidates:  {
      __typename: "ModelCandidateConnection",
      items:  Array< {
        __typename: "Candidate",
        id: string,
        pollCandidatesId: string | null,
        image: string | null,
        name: string | null,
        upvotes: number | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string | null,
    updatedAt: string,
  } | null,
};

export type CreateCandidateMutationVariables = {
  input: CreateCandidateInput,
  condition?: ModelCandidateConditionInput | null,
};

export type CreateCandidateMutation = {
  createCandidate:  {
    __typename: "Candidate",
    id: string,
    pollCandidatesId: string | null,
    image: string | null,
    name: string | null,
    upvotes: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCandidateMutationVariables = {
  input: UpdateCandidateInput,
  condition?: ModelCandidateConditionInput | null,
};

export type UpdateCandidateMutation = {
  updateCandidate:  {
    __typename: "Candidate",
    id: string,
    pollCandidatesId: string | null,
    image: string | null,
    name: string | null,
    upvotes: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCandidateMutationVariables = {
  input: DeleteCandidateInput,
  condition?: ModelCandidateConditionInput | null,
};

export type DeleteCandidateMutation = {
  deleteCandidate:  {
    __typename: "Candidate",
    id: string,
    pollCandidatesId: string | null,
    image: string | null,
    name: string | null,
    upvotes: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetPollQueryVariables = {
  id: string,
};

export type GetPollQuery = {
  getPoll:  {
    __typename: "Poll",
    id: string,
    name: string,
    type: PollType,
    itemType: string | null,
    candidates:  {
      __typename: "ModelCandidateConnection",
      items:  Array< {
        __typename: "Candidate",
        id: string,
        pollCandidatesId: string | null,
        image: string | null,
        name: string | null,
        upvotes: number | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string | null,
    updatedAt: string,
  } | null,
};

export type ListPollsQueryVariables = {
  filter?: ModelPollFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPollsQuery = {
  listPolls:  {
    __typename: "ModelPollConnection",
    items:  Array< {
      __typename: "Poll",
      id: string,
      name: string,
      type: PollType,
      itemType: string | null,
      candidates:  {
        __typename: "ModelCandidateConnection",
        nextToken: string | null,
      } | null,
      createdAt: string | null,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetCandidateQueryVariables = {
  id: string,
};

export type GetCandidateQuery = {
  getCandidate:  {
    __typename: "Candidate",
    id: string,
    pollCandidatesId: string | null,
    image: string | null,
    name: string | null,
    upvotes: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCandidatesQueryVariables = {
  filter?: ModelCandidateFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCandidatesQuery = {
  listCandidates:  {
    __typename: "ModelCandidateConnection",
    items:  Array< {
      __typename: "Candidate",
      id: string,
      pollCandidatesId: string | null,
      image: string | null,
      name: string | null,
      upvotes: number | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type ItemsByTypeQueryVariables = {
  itemType?: string | null,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPollFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ItemsByTypeQuery = {
  itemsByType:  {
    __typename: "ModelPollConnection",
    items:  Array< {
      __typename: "Poll",
      id: string,
      name: string,
      type: PollType,
      itemType: string | null,
      candidates:  {
        __typename: "ModelCandidateConnection",
        nextToken: string | null,
      } | null,
      createdAt: string | null,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnUpdateByIdSubscriptionVariables = {
  id: string,
};

export type OnUpdateByIdSubscription = {
  onUpdateByID:  {
    __typename: "VoteType",
    id: string | null,
    clientId: string | null,
  } | null,
};

export type OnCreatePollSubscription = {
  onCreatePoll:  {
    __typename: "Poll",
    id: string,
    name: string,
    type: PollType,
    itemType: string | null,
    candidates:  {
      __typename: "ModelCandidateConnection",
      items:  Array< {
        __typename: "Candidate",
        id: string,
        pollCandidatesId: string | null,
        image: string | null,
        name: string | null,
        upvotes: number | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string | null,
    updatedAt: string,
  } | null,
};

export type OnUpdatePollSubscription = {
  onUpdatePoll:  {
    __typename: "Poll",
    id: string,
    name: string,
    type: PollType,
    itemType: string | null,
    candidates:  {
      __typename: "ModelCandidateConnection",
      items:  Array< {
        __typename: "Candidate",
        id: string,
        pollCandidatesId: string | null,
        image: string | null,
        name: string | null,
        upvotes: number | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string | null,
    updatedAt: string,
  } | null,
};

export type OnDeletePollSubscription = {
  onDeletePoll:  {
    __typename: "Poll",
    id: string,
    name: string,
    type: PollType,
    itemType: string | null,
    candidates:  {
      __typename: "ModelCandidateConnection",
      items:  Array< {
        __typename: "Candidate",
        id: string,
        pollCandidatesId: string | null,
        image: string | null,
        name: string | null,
        upvotes: number | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string | null,
    updatedAt: string,
  } | null,
};

export type OnCreateCandidateSubscription = {
  onCreateCandidate:  {
    __typename: "Candidate",
    id: string,
    pollCandidatesId: string | null,
    image: string | null,
    name: string | null,
    upvotes: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCandidateSubscription = {
  onUpdateCandidate:  {
    __typename: "Candidate",
    id: string,
    pollCandidatesId: string | null,
    image: string | null,
    name: string | null,
    upvotes: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCandidateSubscription = {
  onDeleteCandidate:  {
    __typename: "Candidate",
    id: string,
    pollCandidatesId: string | null,
    image: string | null,
    name: string | null,
    upvotes: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
