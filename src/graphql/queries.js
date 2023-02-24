/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getRecipe = /* GraphQL */ `
  query GetRecipe($id: ID!) {
    getRecipe(id: $id) {
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
export const listRecipes = /* GraphQL */ `
  query ListRecipes(
    $filter: ModelRecipeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRecipes(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
            items {
              id
              title
              description
              coverImage
              servings
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
      nextToken
    }
  }
`;
export const getRecipeIdea = /* GraphQL */ `
  query GetRecipeIdea($ingredients: [String]!) {
    getRecipeIdea(ingredients: $ingredients)
  }
`;
