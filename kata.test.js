const { defineFeature, loadFeature } = require("jest-cucumber");
const hello = require("./kata.js");
/*
  Feature: Publishing
  Feature: Timeline
  Feature: Following
 */
test("the tests run", () => {
  expect(hello()).toBe("hello world!");
});

const publishing = loadFeature('./__features__/publishing.feature');

defineFeature(publishing, (test) => {
  test('Alice publishes messages to her personal timeline.', ({ given, when, then }) => {
    given('Alice has published "I love the weather today."', () => {

    });
    when('Alice views her timeline', () => {

    });
    then('Alice sees: "I love the weather today."', () => {

    });
  });
});

const timeline = loadFeature('./__features__/timeline.feature');

defineFeature(timeline, (test) => {
  test('Alice views Bob\'s timeline.', ({ given, and, when, then }) => {
    given('Bob has published "Darn! We lost!"', () => {

    });
    and('Bob has published "Good game though."', () => {

    });
    when('Alice views Bob\'s timeline', () => {

    });
    then('Alice sees: "Good game though. (1 minute ago)", "Darn! We lost! (2 minute ago)"', () => {

    });
  });
});

const following = loadFeature('./__features__/following.feature');

defineFeature(following, (test) => {
  test('Charlie can follow Alice and Bob, and he views an aggregated list of all timelines.',
  ({ given, and, when, then }) => {
      given('Alice has published "I love the weather today."', () => {

      });
      and('Bob has published "Darn! We lost!"', () => {

      });
      and('Bob has published "Good game though."', () => {

      });
      and('Charlie has published "I\'m in New York today! Anyone wants to have a coffee?"', () => {

      });
      when('Charlie follows Alice', () => {

      });
      and('Charlie follows Bob', () => {

      });
      and('Charlie views his wall', () => {

      });
      then(
        'Charlie sees: "Charlie - I\'m in New York today! Anyone wants to have a coffee? (15 seconds ago)", "Bob - Good game though. (1 minute ago)", "Bob - Damn! We lost! (2 minutes ago)", "Alice - I love the weather today (5 minutes ago)"',
        () => {

        }
      );
  });

})
