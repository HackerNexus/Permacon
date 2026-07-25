require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();

app.use(cors());
app.use(express.json());

/* ==============================
   DATABASE CONNECTION
============================== */

const db = mysql.createConnection({
  host: process.env.DB_HOST || "localhost",
  port: Number(process.env.DB_PORT) || 3306,
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "permacon",
});

db.connect((err) => {
  if (err) {
    console.error("❌ Database connection failed.");
    console.error(err);
    return;
  }

  console.log("✅ MySQL Connected Successfully");
});

/* ==============================
   TEST ROUTE
============================== */

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Permacon Enterprises API Running",
  });
});

/* ==============================
   SUBMIT FEEDBACK
============================== */

app.post("/feedback", (req, res) => {
  const {
    name,
    email,
    phone,
    rating,
    message,
  } = req.body;

  const sql = `
    INSERT INTO feedback
    (name,email,phone,rating,message)
    VALUES (?,?,?,?,?)
  `;

  db.query(
    sql,
    [
      name,
      email,
      phone,
      rating,
      message,
    ],
    (err, result) => {
      if (err) {
        console.log(err);

        return res.status(500).json({
          success: false,
          message: "Failed to save feedback.",
        });
      }

      res.json({
        success: true,
        message: "Feedback submitted successfully.",
      });
    }
  );
});

/* ==============================
   GET FEEDBACK
============================== */

app.get("/feedback", (req, res) => {

  db.query(
    "SELECT * FROM feedback ORDER BY id DESC",
    (err, rows) => {

      if (err) {
        return res.status(500).json({
          success: false,
        });
      }

      res.json(rows);
    }
  );

});

/* ==============================
   BOOKING REQUEST
============================== */

app.post("/booking", (req, res) => {

  const {
    name,
    email,
    phone,
    service,
    date,
    message,
  } = req.body;

  const sql = `
    INSERT INTO bookings
    (name,email,phone,service,date,message)
    VALUES (?,?,?,?,?,?)
  `;

  db.query(
    sql,
    [
      name,
      email,
      phone,
      service,
      date,
      message,
    ],
    (err) => {

      if (err) {

        console.log(err);

        return res.status(500).json({
          success: false,
          message: "Booking failed.",
        });

      }

      res.json({
        success: true,
        message: "Booking submitted successfully.",
      });

    }
  );

});

/* ==============================
   GET BOOKINGS
============================== */

app.get("/booking", (req, res) => {

  db.query(
    "SELECT * FROM bookings ORDER BY id DESC",
    (err, rows) => {

      if (err) {

        return res.status(500).json({
          success: false,
        });

      }

      res.json(rows);

    }
  );

});

/* ==============================
   TESTIMONIALS
============================== */

app.get("/testimonials", (req, res) => {

  db.query(
    `
    SELECT
      name,
      rating,
      message
    FROM feedback
    WHERE rating >= 4
    ORDER BY id DESC
    LIMIT 8
    `,
    (err, rows) => {

      if (err) {

        return res.status(500).json({
          success: false,
        });

      }

      res.json(rows);

    }
  );

});
/* ==============================
   DASHBOARD SUMMARY
============================== */

app.get("/dashboard", (req, res) => {

  const dashboard = {};

  db.query(
    "SELECT COUNT(*) AS total FROM bookings",
    (err, bookings) => {

      if (err) {
        return res.status(500).json({
          success: false,
          message: "Failed to load dashboard.",
        });
      }

      dashboard.bookings = bookings[0].total;

      db.query(
        "SELECT COUNT(*) AS total FROM feedback",
        (err, feedback) => {

          if (err) {
            return res.status(500).json({
              success: false,
              message: "Failed to load dashboard.",
            });
          }

          dashboard.feedback = feedback[0].total;

          db.query(
            `
            SELECT COUNT(*) AS total
            FROM feedback
            WHERE rating >= 4
            `,
            (err, testimonials) => {

              if (err) {
                return res.status(500).json({
                  success: false,
                  message: "Failed to load dashboard.",
                });
              }

              dashboard.testimonials = testimonials[0].total;

              res.json({
                success: true,
                data: dashboard,
              });

            }
          );

        }
      );

    }
  );

});
/* ==============================
   FEEDBACK PUBLISH / HIDE / DELETE
============================== */

app.patch("/feedback/:id/publish", (req, res) => {
  const { id } = req.params;

  db.query(
    "UPDATE feedback SET published = 1 WHERE id = ?",
    [id],
    (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).json({
          success: false,
          message: "Failed to publish feedback.",
        });
      }

      res.json({
        success: true,
        message: "Feedback published successfully.",
      });
    }
  );
});

app.patch("/feedback/:id/hide", (req, res) => {
  const { id } = req.params;

  db.query(
    "UPDATE feedback SET published = 0 WHERE id = ?",
    [id],
    (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).json({
          success: false,
          message: "Failed to hide feedback.",
        });
      }

      res.json({
        success: true,
        message: "Feedback hidden successfully.",
      });
    }
  );
});

app.delete("/feedback/:id", (req, res) => {
  const { id } = req.params;

  db.query(
    "DELETE FROM feedback WHERE id = ?",
    [id],
    (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).json({
          success: false,
          message: "Failed to delete feedback.",
        });
      }

      res.json({
        success: true,
        message: "Feedback deleted successfully.",
      });
    }
  );
});

/* ==============================
   PUBLIC TESTIMONIALS
============================== */

app.get("/testimonials", (req, res) => {
  db.query(
    `
    SELECT id, name, rating, message
    FROM feedback
    WHERE published = 1
    ORDER BY id DESC
    `,
    (err, rows) => {
      if (err) {
        return res.status(500).json({
          success: false,
          message: "Failed to load testimonials.",
        });
      }

      res.json(rows);
    }
  );
});
/* ==============================
   START SERVER
============================== */

const PORT =
  process.env.PORT || 5000;

app.listen(PORT, () => {

  console.log(
    `🚀 Server running on port ${PORT}`
  );

});