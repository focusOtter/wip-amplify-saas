/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onCreateUser(filter: $filter, owner: $owner) {
      id
      username
      email
      stripeCustomerId
      subscriptionStatus
      subscriptionPlan
      recipes {
        items {
          id
          title
          user {
            id
            username
            email
            stripeCustomerId
            subscriptionStatus
            subscriptionPlan
            recipes {
              nextToken
            }
            createdAt
            updatedAt
            owner
          }
          description
          coverImage
          servings
          ingredients {
            image
            items
          }
          steps {
            image
            item
          }
          visibility
          createdAt
          updatedAt
          userRecipesId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onUpdateUser(filter: $filter, owner: $owner) {
      id
      username
      email
      stripeCustomerId
      subscriptionStatus
      subscriptionPlan
      recipes {
        items {
          id
          title
          user {
            id
            username
            email
            stripeCustomerId
            subscriptionStatus
            subscriptionPlan
            recipes {
              nextToken
            }
            createdAt
            updatedAt
            owner
          }
          description
          coverImage
          servings
          ingredients {
            image
            items
          }
          steps {
            image
            item
          }
          visibility
          createdAt
          updatedAt
          userRecipesId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onDeleteUser(filter: $filter, owner: $owner) {
      id
      username
      email
      stripeCustomerId
      subscriptionStatus
      subscriptionPlan
      recipes {
        items {
          id
          title
          user {
            id
            username
            email
            stripeCustomerId
            subscriptionStatus
            subscriptionPlan
            recipes {
              nextToken
            }
            createdAt
            updatedAt
            owner
          }
          description
          coverImage
          servings
          ingredients {
            image
            items
          }
          steps {
            image
            item
          }
          visibility
          createdAt
          updatedAt
          userRecipesId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateRecipe = /* GraphQL */ `
  subscription OnCreateRecipe(
    $filter: ModelSubscriptionRecipeFilterInput
    $owner: String
  ) {
    onCreateRecipe(filter: $filter, owner: $owner) {
      id
      title
      user {
        id
        username
        email
        stripeCustomerId
        subscriptionStatus
        subscriptionPlan
        recipes {
          items {
            id
            title
            user {
              id
              username
              email
              stripeCustomerId
              subscriptionStatus
              subscriptionPlan
              createdAt
              updatedAt
              owner
            }
            description
            coverImage
            servings
            ingredients {
              image
              items
            }
            steps {
              image
              item
            }
            visibility
            createdAt
            updatedAt
            userRecipesId
            owner
          }
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      description
      coverImage
      servings
      ingredients {
        image
        items
      }
      steps {
        image
        item
      }
      visibility
      createdAt
      updatedAt
      userRecipesId
      owner
    }
  }
`;
export const onUpdateRecipe = /* GraphQL */ `
  subscription OnUpdateRecipe(
    $filter: ModelSubscriptionRecipeFilterInput
    $owner: String
  ) {
    onUpdateRecipe(filter: $filter, owner: $owner) {
      id
      title
      user {
        id
        username
        email
        stripeCustomerId
        subscriptionStatus
        subscriptionPlan
        recipes {
          items {
            id
            title
            user {
              id
              username
              email
              stripeCustomerId
              subscriptionStatus
              subscriptionPlan
              createdAt
              updatedAt
              owner
            }
            description
            coverImage
            servings
            ingredients {
              image
              items
            }
            steps {
              image
              item
            }
            visibility
            createdAt
            updatedAt
            userRecipesId
            owner
          }
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      description
      coverImage
      servings
      ingredients {
        image
        items
      }
      steps {
        image
        item
      }
      visibility
      createdAt
      updatedAt
      userRecipesId
      owner
    }
  }
`;
export const onDeleteRecipe = /* GraphQL */ `
  subscription OnDeleteRecipe(
    $filter: ModelSubscriptionRecipeFilterInput
    $owner: String
  ) {
    onDeleteRecipe(filter: $filter, owner: $owner) {
      id
      title
      user {
        id
        username
        email
        stripeCustomerId
        subscriptionStatus
        subscriptionPlan
        recipes {
          items {
            id
            title
            user {
              id
              username
              email
              stripeCustomerId
              subscriptionStatus
              subscriptionPlan
              createdAt
              updatedAt
              owner
            }
            description
            coverImage
            servings
            ingredients {
              image
              items
            }
            steps {
              image
              item
            }
            visibility
            createdAt
            updatedAt
            userRecipesId
            owner
          }
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      description
      coverImage
      servings
      ingredients {
        image
        items
      }
      steps {
        image
        item
      }
      visibility
      createdAt
      updatedAt
      userRecipesId
      owner
    }
  }
`;
