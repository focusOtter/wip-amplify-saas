/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createRecipe = /* GraphQL */ `
  mutation CreateRecipe(
    $input: CreateRecipeInput!
    $condition: ModelRecipeConditionInput
  ) {
    createRecipe(input: $input, condition: $condition) {
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
export const updateRecipe = /* GraphQL */ `
  mutation UpdateRecipe(
    $input: UpdateRecipeInput!
    $condition: ModelRecipeConditionInput
  ) {
    updateRecipe(input: $input, condition: $condition) {
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
export const deleteRecipe = /* GraphQL */ `
  mutation DeleteRecipe(
    $input: DeleteRecipeInput!
    $condition: ModelRecipeConditionInput
  ) {
    deleteRecipe(input: $input, condition: $condition) {
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
