# Testimonial avatar images

Drop the LinkedIn profile photo for each recommender here, using these exact filenames:

- `john.jpeg` — referenced by `testimonials[0].image` in `src/data/portfolio.json`
- `vasco.jpeg` — referenced by `testimonials[1].image`

## Adding a new recommendation

1. Save the person's photo as `/public/testimonials/<their-id>.jpeg` (or .png — any browser-readable image works)
2. Add a new entry to the `testimonials` array in `src/data/portfolio.json`:

```json
{
  "id": "their-id",
  "image": "/testimonials/their-id.jpeg",
  "quote": "Full LinkedIn recommendation text. Use \\n\\n between paragraphs.",
  "name": "Full Name",
  "role": "Title · Company",
  "avatarColor": "#22D3EE",
  "relationship": "How they worked with you · Month Year"
}
```

If you don't have a photo, leave `"image": ""` (or omit the field). The card will automatically render the person's initials in a gradient circle instead.
