-- Seed data for the 7 confirmed Koh Tao schools from initial research (2026-08-14).
-- Fields left NULL are real gaps, not placeholders to delete — they're what each
-- school needs to confirm before going live. See the prototype artifact for reference.

insert into schools (name, agency, area, website, price_info, languages, group_size) values
  ('Davy Jones'' Locker Diving', 'PADI 5-Star IDC', 'Mae Haad', 'https://davyjoneslocker.asia/', null, null, null),
  ('Scuba Birds', 'PADI', 'Koh Tao', 'https://www.scubabirds.com/ko-tao.html', null, array['English', 'German'], null),
  ('Master Divers', 'PADI', 'Koh Tao', 'https://master-divers.com/', null, null, null),
  ('Diverholics', 'PADI', 'Koh Tao', 'https://diverholics.com/', 'from ~30,000 THB (pro course)', null, '1-to-1 lessons offered'),
  ('Below Zero Divers', 'PADI', 'Mae Haad, near Tukta Thai Food', 'https://belowzerodivers.com/', null, null, null),
  ('Nitro Dive Center', null, 'Main port', 'https://nitrokohtao.com/en/diving-koh-tao/', null, null, 'Small groups (stated focus)'),
  ('Assava Dive Resort', 'PADI 5-Star CDC', 'Chalok Baan Kao', 'https://www.assavadiveresort.com/', '~11,000 THB / 3-day course (example)', null, null);

-- Additional schools researched via web search + official-site verification (2026-08-23).
-- Same rule applies: fields are null unless explicitly stated on the school's own site.
insert into schools (name, agency, area, website, price_info, languages, group_size) values
  ('Black Turtle Dive', 'PADI 5-Star CDC', 'Mae Haad', 'https://www.blackturtledive.com/', '~38,000 THB / Divemaster course', null, null),
  ('Buddha View Dive Centre', 'PADI', 'Tanote Bay', 'https://www.buddhaviewdivecentre.com/', '~10,900 THB / Open Water course (incl. 3 nights hostel, special offer)', null, null),
  ('Deep Dive Center', 'PADI', 'Koh Tao', 'https://www.deepdivecenterthailand.com/', null, null, 'Small group sizes (stated, no number given)'),
  ('Isla Tortuga Divers', 'PADI 5-Star IDC', 'Koh Tao', 'https://islatortugadivers.com/', '~9,900 THB / Open Water course (3-day)', null, null),
  ('Nava Scuba Diving', 'PADI 5-Star / Eco Center', 'Chalok Baan Kao Bay', 'https://www.navascuba.com/', '5,970-19,900 THB / Open Water course (varies by season)', array['English', 'French', 'German', 'Thai'], 'max 4 divers per instructor'),
  ('Pimp My Dive', 'PADI 5-Star IDC', 'Mae Haad', 'https://www.pimpmydive.net/', null, array['French'], 'Small groups (stated, no number given)'),
  ('Simple Life Divers', 'PADI 5-Star Dive Resort', 'Sairee Beach', 'https://simplelifedivers.com/', null, null, null),
  ('Ban''s Diving Resort', 'PADI 5-Star CDC / IDC', 'Sairee Beach', 'https://www.bansdivingresort.com/en/', null, null, null),
  ('Big Bubble', 'PADI', 'Koh Tao', 'https://divingatkohtao.com/', '~12,000 THB / Open Water course (course only, 1 person)', null, null),
  ('CV Divers', 'PADI', 'Sai Daeng Bay', 'https://www.cvdivers.com/', '~13,000 THB / Open Water course (3-day)', null, null),
  ('Duck n Dive Koh Tao', 'PADI', 'Koh Tao', 'https://duckndivekohtao.com/web/', null, null, null),
  ('Fifty Six Dive', 'PADI', 'Sairee Beach', 'https://www.fiftysixdive.com/', 'from ~11,900 THB / Open Water course', null, 'Small groups (stated, no number given)'),
  ('Ocean Sound Dive + Yoga', 'PADI 5-Star', 'Koh Tao', 'https://www.oceansoundkohtao.com/', '~9,900 THB / Open Water course (2.5 days, early-bird)', null, 'Small group settings (stated, no number given)'),
  ('Sairee Cottage Diving', 'PADI IDC', 'Sairee Beach', 'https://www.saireecottagediving.com/', null, null, null),
  ('Scuba Shack', 'PADI 5-Star IDC', 'Sairee Beach', 'https://www.scubashackkohtao.com/', '~12,000 THB / Open Water course (incl. materials)', null, 'max 4 divers per instructor'),
  ('Siam Scuba Dive Center', 'PADI 5-Star IDC', 'Sairee Beach', 'https://siamscuba.com/', '~12,000 THB / Open Water Diver course (2.5 days)', null, 'Small groups (stated, no number given)'),
  ('Koh Tao Scuba Club', null, 'Koh Tao', 'https://www.kohtaoscubaclub.com/', '~9,500 THB / Open Water course (3-day, certified to 18m)', array['English', 'Thai', 'French', 'Spanish', 'Catalan', 'Dutch', 'German', 'Swedish', 'Russian'], null),
  ('Koh Tao Diving Academy', 'SSI', 'Koh Tao', 'https://kohtaodivingacademy.com/', null, null, null),
  ('Big Blue Diving', 'SSI', 'Sairee Beach', 'https://www.bigbluediving.com/', null, null, null),
  ('Chalok Reef Divers', 'SSI', 'Chalok Baan Kao', 'https://chalokreefdivers.com/', '~10,950 THB / Open Water course', null, 'max 4 people per instructor'),
  ('Reef Dive Centre', 'PADI', 'Shark Bay', 'https://www.reefdivecenter.com/', null, null, null),
  ('Koh Tao Divers', 'SSI', 'Sairee Beach', 'https://kohtaodivers.com/', '~10,900 THB / Open Water course (3-day)', null, 'max 4 divers per group'),
  ('AquaTao', 'SSI', 'Koh Tao', 'https://www.aquatao.fr/en/', '~11,000 THB / Open Water course', null, '1-4 divers max per instructor'),
  ('Crystal Dive', 'SSI Diamond ITC', 'Mae Haad', 'https://www.crystaldive.com/', '~12,500 THB / Open Water course (3-day)', null, null),
  ('New Heaven Dive School', 'SSI', 'Chalok Baan Kao', 'https://newheavendiveschool.com/', null, null, null),
  ('Roctopus Dive', 'RAID', 'Sairee Beach', 'https://www.roctopusdive.com/', null, null, null),
  ('New Way Diving', 'SSI', 'Sairee Beach', 'https://newwaydiving.net/en/', null, null, 'max 4:1 diver-to-guide ratio'),
  ('Coral Grand Divers', 'PADI', 'Sairee Beach', 'https://www.kohtaocoral.com/', '~11,000 THB / Open Water course', array['Chinese', 'Danish', 'Dutch', 'English', 'French', 'German', 'Italian', 'Japanese', 'Korean', 'Swedish', 'Thai'], null),
  ('Echo Divers', 'SSI', 'Mae Haad', 'https://echodiverskohtao.com/', null, null, null),
  ('Mojo Diver', 'SSI', 'Sairee Beach', 'https://www.mojodiver.com/', '~9,500 THB / Open Water course (3-day)', null, null),
  ('The Divers Boat', 'SSI', 'Mae Haad', 'https://thediversboat.com/en/', null, null, null),
  ('Seashell Divers', 'SSI', 'Sairee Beach', 'https://seashelldivers.com/', null, null, null),
  ('Impian Divers', 'PADI / IDD', 'Mae Haad', 'https://impiandivers.com/en/', 'IDD ~9,000 THB / PADI ~11,000 THB / Open Water course', array['Dutch'], null),
  ('Calypso Diving', 'SSI', 'Tanote Bay', 'https://diving-calypso.com/', '~11,900 THB / Open Water Diver course (3-4 days)', array['German', 'English', 'French', 'Thai'], 'max 4 people per group'),
  ('Koh Tao Tec Divers', 'SSI', 'Koh Tao', 'https://www.kohtaotecdivers.com/', null, null, null),
  ('The Dearly Dive', 'PADI 5-Star Dive Resort', 'Chalok Baan Kao', 'https://www.thedearlykohtaohostel.com/scuba-diving-koh-tao', null, null, 'Small group classes (stated, no number given)');
