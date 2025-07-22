# Import libraries
import seaborn as sns
import pandas as pd
import matplotlib.pyplot as plt

# Load Titanic dataset from Seaborn
titanic = sns.load_dataset('titanic')

# Display basic info about the dataset
print("Dataset Info:")
print(titanic.info())
print("\nFirst 5 rows of the dataset:")
print(titanic.head())

# Summary statistics
print("\nSummary Statistics:")
print(titanic.describe())

# Handle missing values
print("\nMissing Values:")
print(titanic.isnull().sum())

# Fill missing 'age' with median
titanic['age'].fillna(titanic['age'].median(), inplace=True)

# Fill missing 'embarked' with mode
titanic['embarked'].fillna(titanic['embarked'].mode()[0], inplace=True)

# Drop 'deck' due to high missing values
titanic.drop('deck', axis=1, inplace=True)

# 1. Survival rate by passenger class
plt.figure(figsize=(8, 6))
sns.countplot(x='pclass', hue='survived', data=titanic)
plt.title('Survival Count by Passenger Class')
plt.xlabel('Passenger Class')
plt.ylabel('Count')
plt.legend(['Not Survived', 'Survived'])
plt.show()

# 2. Survival rate by gender
plt.figure(figsize=(8, 6))
sns.countplot(x='sex', hue='survived', data=titanic)
plt.title('Survival Count by Gender')
plt.xlabel('Gender')
plt.ylabel('Count')
plt.legend(['Not Survived', 'Survived'])
plt.show()

# 3. Age distribution of survivors vs non-survivors
plt.figure(figsize=(8, 6))
sns.histplot(data=titanic, x='age', hue='survived', bins=30, kde=True)
plt.title('Age Distribution by Survival')
plt.xlabel('Age')
plt.ylabel('Count')
plt.legend(['Survived', 'Not Survived'])
plt.show()

# 4. Correlation heatmap of numeric features
plt.figure(figsize=(10, 8))
numeric_cols = titanic.select_dtypes(include=['int64', 'float64']).columns
sns.heatmap(titanic[numeric_cols].corr(), annot=True, cmap='coolwarm', center=0)
plt.title('Correlation Heatmap of Numeric Features')
plt.show()

# 5. Survival rate by embarkation point
plt.figure(figsize=(8, 6))
sns.countplot(x='embarked', hue='survived', data=titanic)
plt.title('Survival Count by Embarkation Point')
plt.xlabel('Embarkation Point')
plt.ylabel('Count')
plt.legend(['Not Survived', 'Survived'])
plt.show()

# Key insights
survival_rate = titanic['survived'].mean() * 100
print(f"\nOverall Survival Rate: {survival_rate:.2f}%")
print("\nSurvival Rate by Class:")
print(titanic.groupby('pclass')['survived'].mean() * 100)
print("\nSurvival Rate by Gender:")
print(titanic.groupby('sex')['survived'].mean() * 100)