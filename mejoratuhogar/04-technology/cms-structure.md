# CMS Structure (Sanity)

## 🧠 Objective
Define a scalable content model for Mejoratuhogar.es that supports:
- property listings
- rental listings
- area pages
- services
- testimonials
- blog content
- SEO metadata

The CMS should be easy to manage for non-technical users and flexible enough to grow.

---

## Core Content Types

### 1. Property
Main content type for both sale and rental properties.

#### Fields
- title
- slug
- operationType (`sale` / `rent`)
- price
- location
- city (reference to City)
- address (optional)
- images
- featuredImage
- propertyType (apartment, house, penthouse, etc.)
- status (available, reserved, sold, rented)
- bedrooms
- bathrooms
- builtArea
- plotArea (optional)
- shortDescription
- fullDescription
- features / amenities
- featured (boolean)
- seoTitle
- seoDescription

#### Notes
This single content type should power:
- property listings
- sale pages
- rental pages
- property detail pages

---

### 2. City
Used for local SEO and area-based filtering.

#### Fields
- name
- slug
- heroTitle
- seoContent
- shortDescription
- featuredImage
- seoTitle
- seoDescription

#### Notes
Used for pages like:
- properties in Benicarló
- properties in Vinaròs
- properties in Peñíscola

---

### 3. Service
Used for business service pages.

#### Fields
- title
- slug
- serviceType (`buy`, `sell`, `rent`, `pvc-windows`)
- shortDescription
- fullDescription
- benefits
- CTA text
- featuredImage
- seoTitle
- seoDescription

#### Notes
Used for:
- Sell Property page
- Rent page
- PVC Windows page
- optional Buy page intro content

---

### 4. Testimonial
Used for trust and conversion sections.

#### Fields
- name
- city
- serviceType
- text
- rating (optional)
- featured (boolean)

---

### 5. Blog Post
Used for SEO and content marketing.

#### Fields
- title
- slug
- excerpt
- featuredImage
- category
- author
- publishedDate
- content
- relatedCity (optional)
- relatedService (optional)
- seoTitle
- seoDescription

#### Notes
This content supports:
- local SEO
- buying/selling guides
- rental content
- home improvement content

---

### 6. Site Settings
Global configuration document.

#### Fields
- businessName
- phone
- email
- WhatsApp number
- address
- social links
- default SEO title
- default SEO description
- logo
- opening hours (optional)

---

## Relationships
- Property → references City
- Blog Post → may reference City
- Blog Post → may reference Service
- Testimonials → may reference service type

---

## Content Modeling Rules
- Use `slug` for all pages that need URLs
- Include SEO fields in all public-facing content types
- Reuse references instead of duplicating city names
- Keep content separate from design/presentation
- Prefer one flexible model over multiple duplicated models

---

## MVP Content Types
For the first version, implement these first:
1. Property
2. City
3. Service
4. Testimonial
5. Site Settings

Blog Post can be added in MVP if time allows, but should be included soon for SEO growth.

---

## Final Principle
The Sanity structure must make it easy to:
- publish and update properties quickly
- create local SEO pages
- manage services consistently
- scale the site without restructuring the CMS later
