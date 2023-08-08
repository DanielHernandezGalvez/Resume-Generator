import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import { PDFDocumentProps } from "../../interface/PDFDocumentProps";

const PDFDocument: React.FC<PDFDocumentProps> = ({
  name,
  pretendedPosition,
  email,
  phone,
  description,
  experiences,
  educationList,
  skills,
}) => (
  <Document>
    <Page style={styles.container}>
      <View>
        {/* Basic info */}
        <View style={styles.doble}>
          <View>
            <Text style={styles.name}>Nombre completo{name}</Text>
            <Text style={styles.position}>Puesto{pretendedPosition}</Text>
          </View>
          <View>
            <Text style={styles.content}>Correo{email}</Text>
            <Text style={styles.content}>telefono{phone}</Text>
          </View>
        </View>
        <View style={styles.hr} />
        <Text style={styles.content}>About Me: {description}</Text>
        {/* Experience */}
        <View>
          <Text style={styles.title}>Experience:</Text>
          {experiences.map((exp, index) => (
            <View key={index}>
              <Text>{exp.position}</Text>
              <Text style={styles.content}>
                {exp.company}, {exp.since} -{" "}
                {exp.isWorking ? "Present" : exp.until}
              </Text>
              <Text> {exp.workDescription}</Text>
              <Text> {exp.techStack}</Text>
            </View>
          ))}
        </View>

        {/* Education */}
        <Text style={styles.title}>Education:</Text>
        {educationList.map((edu, index) => (
          <View key={index}>
            <Text>
              {edu.degree} in {edu.university}
            </Text>
            <Text style={styles.content}>
              {edu.startDate} to {edu.isOngoing ? "Present" : edu.endDate}
            </Text>
          </View>
        ))}
        {/* Skills */}
        <Text style={styles.title}>Skills:</Text>
        {skills.map((skill, index) => (
          <Text key={index} style={styles.content}>
            • {skill}
          </Text>
        ))}
      </View>
    </Page>
  </Document>
);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 50,
    paddingVertical: 30,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 2,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 5,
  },
  content: {
    fontSize: 8,
  },
  position: {
    fontSize: 12,
  },
  doble: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  hr: {
    marginVertical: 5,
    width: "100%",
    height: 1,
    backgroundColor: "black",
  },
});

export default PDFDocument;